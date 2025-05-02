import { describe, it, expect } from 'vitest';
import divide from './divide.js';

describe('Division', () => {
    it('ska dividera två tal korrekt', () => {
        expect(divide(6, 2)).toBe(3);
        expect(divide(5, 2)).toBe(2.5);
        expect(divide(-6, 2)).toBe(-3);
    });

    it('ska kasta fel vid division med noll', () => {
        expect(() => divide(5, 0)).toThrow("Division med noll är inte tillåtet");
    });
}); 