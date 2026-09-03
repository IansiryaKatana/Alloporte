export const HERO_SCROLL_FRAME_COUNT = 241
export const HERO_SCROLL_POSTER = '/hero-scroll/poster.webp'
export const HERO_SCROLL_FRAME_PREFIX = '/hero-scroll/ezgif-frame-'

const BATCH_SIZE = 4
const MAX_DPR = 1.75
const MOBILE_MAX_WIDTH = 700

export type HeroScrollPlayer = {
  playhead: { frame: number }
  frameCount: number
  draw: () => void
  resize: () => void
  destroy: () => void
}

function frameUrl(index: number) {
  return `${HERO_SCROLL_FRAME_PREFIX}${String(index).padStart(3, '0')}.webp`
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.decoding = 'async'
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error(src))
    image.src = src
  })
}

function drawCover(ctx: CanvasRenderingContext2D, source: HTMLImageElement, width: number, height: number) {
  const sourceWidth = source.naturalWidth || source.width
  const sourceHeight = source.naturalHeight || source.height
  if (!sourceWidth || !sourceHeight) return

  const scale = Math.max(width / sourceWidth, height / sourceHeight)
  const drawWidth = sourceWidth * scale
  const drawHeight = sourceHeight * scale
  const x = (width - drawWidth) * 0.5
  const y = (height - drawHeight) * 0.5
  ctx.drawImage(source, x, y, drawWidth, drawHeight)
}

function nearestFrame(frames: Array<HTMLImageElement | null>, index: number) {
  const exact = frames[index]
  if (exact) return exact

  for (let offset = 1; offset < frames.length; offset += 1) {
    const before = frames[index - offset]
    if (before) return before
    const after = frames[index + offset]
    if (after) return after
  }

  return null
}

export function createHeroScrollVideo(canvas: HTMLCanvasElement): HeroScrollPlayer {
  const ctx = canvas.getContext('2d', { alpha: false })
  if (!ctx) {
    return {
      playhead: { frame: 0 },
      frameCount: 1,
      draw() {},
      resize() {},
      destroy() {},
    }
  }
  const context: CanvasRenderingContext2D = ctx

  const step = window.innerWidth < MOBILE_MAX_WIDTH ? 2 : 1
  const urls: string[] = []
  for (let index = 1; index <= HERO_SCROLL_FRAME_COUNT; index += step) {
    urls.push(frameUrl(index))
  }

  const frames: Array<HTMLImageElement | null> = new Array(urls.length).fill(null)
  const playhead = { frame: 0 }
  let poster: HTMLImageElement | null = null
  let width = 0
  let height = 0
  let aborted = false

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, MAX_DPR)
    const rect = canvas.getBoundingClientRect()
    width = Math.max(1, Math.round(rect.width) || window.innerWidth)
    height = Math.max(1, Math.round(rect.height) || window.innerHeight)
    canvas.width = Math.round(width * ratio)
    canvas.height = Math.round(height * ratio)
    context.setTransform(ratio, 0, 0, ratio, 0, 0)
    draw()
  }

  function draw() {
    if (!width || !height) return
    context.fillStyle = '#000000'
    context.fillRect(0, 0, width, height)
    const frameIndex = Math.max(0, Math.min(frames.length - 1, Math.round(playhead.frame)))
    const image = nearestFrame(frames, frameIndex) || poster
    if (!image) return
    drawCover(context, image, width, height)
    canvas.style.opacity = '1'
  }

  async function loadPoster() {
    try {
      poster = await loadImage(HERO_SCROLL_POSTER)
      if (!aborted) draw()
    } catch {
      poster = null
    }
  }

  async function loadSequence() {
    for (let start = 0; start < urls.length; start += BATCH_SIZE) {
      if (aborted) return
      const slice = urls.slice(start, start + BATCH_SIZE)
      const loaded = await Promise.all(
        slice.map(async (url) => {
          try {
            return await loadImage(url)
          } catch {
            return null
          }
        }),
      )
      if (aborted) return
      loaded.forEach((image, offset) => {
        if (image) frames[start + offset] = image
      })
      draw()
    }
  }

  void loadPoster().then(() => {
    if (!aborted) void loadSequence()
  })

  resize()
  window.addEventListener('resize', resize)

  return {
    playhead,
    frameCount: urls.length,
    draw,
    resize,
    destroy() {
      aborted = true
      window.removeEventListener('resize', resize)
      frames.fill(null)
      poster = null
    },
  }
}
