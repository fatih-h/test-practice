import calculator from '../src/calculator';

it('Process add', () => {
    expect(calculator.add(5, 4)).toBe(9);
});

it('Process subtract', () => {
    expect(calculator.subtract(17, 3)).toBe(14);
});

it('Process divide', () => {
    expect(calculator.divide(20, 4)).toBe(5);
});

it('Zero denominator', () => {
    expect(calculator.divide(40, 0)).toBe(null);
});

it('Process multiply', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
});

