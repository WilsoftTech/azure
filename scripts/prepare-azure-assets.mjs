import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const directory = path.resolve('public', 'azure');
await mkdir(directory, { recursive: true });
const assets = {
  villa: ['photo-1613977257363-707ba9348227', 1500],
  interior: ['photo-1600210492486-724fe5c67fb0', 650],
  pool: ['photo-1600607687920-4e2a09cf159d', 1200],
  house: ['photo-1600596542815-ffad4c1539a9', 1200],
  living: ['photo-1600607687939-ce8a6c25118c', 1200],
  coast: ['photo-1613490493576-7fde63acd811', 1800],
  city: ['photo-1512453979798-5ea266f8880c', 850],
};
const results = await Promise.allSettled(Object.entries(assets).map(async ([name, [id, width]]) => {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const image = await sharp(Buffer.from(await response.arrayBuffer())).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
      await writeFile(path.join(directory, `${name}.webp`), image);
      console.log(`${name}: ${Math.round(image.length / 1024)} KB`);
      return;
    } catch (error) {
      if (attempt === 2) throw new Error(`${name}: ${error.message}`);
    }
  }
}));
for (const result of results) if (result.status === 'rejected') console.error(result.reason.message);
if (results.some(result => result.status === 'rejected')) process.exitCode = 1;
