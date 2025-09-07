import { getRandomDifferent } from './game';

describe('getRandomDifferent', () => {
  test('returns other index when max>1', () => {
    const current = 5;
    const max = 16;
    for (let i = 0; i < 200; i += 1) {
      const next = getRandomDifferent(current, max);
      expect(next).not.toBe(current);
      expect(next).toBeGreaterThanOrEqual(0);
      expect(next).toBeLessThan(max);
    }
  });

  test('when max <= 1 returns 0', () => {
    expect(getRandomDifferent(0, 1)).toBe(0);
    expect(getRandomDifferent(3, 0)).toBe(0);
  });
});
