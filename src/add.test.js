import { describe, it, expect } from 'vitest';
import add from './add.js';

describe('Addition', () => {
    it('ska addera två tal korrekt', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });
}); 