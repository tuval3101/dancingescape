import type { Track } from '../types/music'; import { TrackCard } from './TrackCard';
export function TrackGrid({ tracks }: { tracks: Track[] }) { return <div className="track-grid">{tracks.map((track) => <TrackCard key={track.id} track={track} />)}</div>; }
