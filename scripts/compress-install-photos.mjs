import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = path.resolve(import.meta.dirname, '../assets')
const DEST_DIR = path.resolve(import.meta.dirname, '../public/assets/installations')
const QUALITY = 74

const entries = (await fs.readdir(SOURCE_DIR))
  .filter((name) => name.toLowerCase().endsWith('.png'))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

if (entries.length === 0) {
  throw new Error(`No installation PNGs found in ${SOURCE_DIR}`)
}

await fs.mkdir(DEST_DIR, { recursive: true })

for (const [index, name] of entries.entries()) {
  const destName = `install-${String(index + 1).padStart(2, '0')}.webp`
  const destPath = path.join(DEST_DIR, destName)
  await sharp(path.join(SOURCE_DIR, name))
    .rotate()
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(destPath)
  console.log(`${name} -> ${destName}`)
}

console.log(`Wrote ${entries.length} installation photos to ${DEST_DIR}`)
