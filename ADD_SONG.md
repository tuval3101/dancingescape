# Add a song

Copy an MP3 and a same-name cover image into `incoming/`, then run `npm run catalog`. For a new release, add its normalized folder under `public/music/` with `audio.mp3` and `cover.webp`; the importer is intentionally conservative and only matches explicit, normalized names. It reads ID3 title, artist, and duration with `music-metadata`, keeps source files untouched, and writes `public/catalog.json`.

For local development, refresh the page after running the catalog command. On Vercel, `npm run build` regenerates the catalog from committed incoming files before Vite builds the site. Ambiguous artwork is never guessed; use the structured folder method for certainty.
