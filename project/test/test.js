import { render, screen, fireEvent } from '@testing-library/react-native';
import calcul_water from './calcul_water.js';

test('test', () => {
    expect(calcul_water(60)).toBe(8);
    expect(calcul_water(0)).toBe(8);
});