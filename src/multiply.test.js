import { describe, it, expect } from 'vitest';
import multiply from './multiply.js';

describe('Multiplikation', () => {
    it('ska multiplicera två tal korrekt', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
    });
}); 