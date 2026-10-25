import { useEffect, useState } from 'react';
import type { Track } from '../types/music';
export function useCatalog() { const [tracks, setTracks] = useState<Track[]>([]); useEffect(() => { fetch(`/catalog.json?v=${Date.now()}`).then(r => r.json()).then(setTracks).catch(() => setTracks([])); }, []); return tracks; }
