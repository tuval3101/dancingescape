import { describe, expect, it } from 'vitest';
import catalog from '../../public/catalog.json';
describe('catalog', () => { it('contains real published tracks with portable URLs', () => { expect(catalog).toHaveLength(2); expect(catalog.every(t => t.audioUrl.startsWith('/music/'))).toBe(true); expect(catalog.every(t => t.duration > 0)).toBe(true); }); });
