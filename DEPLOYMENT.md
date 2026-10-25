# Deployment

Push this repository to GitHub and import it into Vercel. The build command is `npm run build`; the output directory is `dist`. Each deployment regenerates `public/catalog.json` before packaging the site. Audio is currently static and intentionally small (the supplied files are approximately 2.9 MB and 3.8 MB). For a larger library, move audio/cover assets to Vercel Blob or compatible object storage while keeping `audioUrl` in the catalog unchanged.
