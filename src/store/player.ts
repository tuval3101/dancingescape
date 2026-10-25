import { create } from 'zustand';
import type { Track } from '../types/music';
type Player = { current: Track | null; playing: boolean; progress: number; setCurrent: (track: Track) => void; toggle: () => void; setProgress: (progress: number) => void; };
export const usePlayer = create<Player>((set) => ({ current: null, playing: false, progress: 0, setCurrent: (current) => set({ current, playing: true, progress: 0 }), toggle: () => set((s) => ({ playing: !s.playing })), setProgress: (progress) => set({ progress }) }));
