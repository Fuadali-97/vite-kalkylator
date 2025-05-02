import { describe, it, expect } from 'vitest';
import subtract from './subtract.js';

describe('Subtraktion', () => {
    it('ska subtrahera två tal korrekt', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(1, 1)).toBe(0);
        expect(subtract(0, 5)).toBe(-5);
    });
}); 