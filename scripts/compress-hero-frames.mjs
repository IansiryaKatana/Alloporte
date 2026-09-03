import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = String.raw`C:\Users\HP\Downloads\alloporte 3d video scroll`
const DEST_DIR = path.resolve(import.meta.dirname, '../public/hero-scroll')
const QUALITY = 72
const CONCURRENCY = 8

function padFrame(index) {
  return String(index).padStart(3, '0')
}

async function convertFile(sourcePath, destPath) {
  await sharp(sourcePath).webp({ quality: QUALITY, effort: 4 }).toFile(destPath)
}

async function runPool(items, limit, worker) {
  let next = 0
  let done = 0

  async function run() {
    while (next < items.length) {
      const current = next
      next += 1
      await worker(items[current], current)
      done += 1
      if (done % 20 === 0 || done === items.length) {
        console.log(`Converted ${done}/${items.length}`)
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => run()))
}

const entries = (await fs.readdir(SOURCE_DIR))
  .filter((name) => /^ezgif-frame-\d+\.png$/i.test(name))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

if (entries.length === 0) {
  throw new Error(`No ezgif frames found in ${SOURCE_DIR}`)
}

await fs.mkdir(DEST_DIR, { recursive: true })

await runPool(entries, CONCURRENCY, async (name) => {
  const destName = name.replace(/\.png$/i, '.webp')
  await convertFile(path.join(SOURCE_DIR, name), path.join(DEST_DIR, destName))
})

const posterSource = path.join(DEST_DIR, `ezgif-frame-${padFrame(1)}.webp`)
await fs.copyFile(posterSource, path.join(DEST_DIR, 'poster.webp'))

console.log(`Wrote ${entries.length} frames + poster.webp to ${DEST_DIR}`)
