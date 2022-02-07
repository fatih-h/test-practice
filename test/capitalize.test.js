import capitalize from '../src/capitalize';

it('capitalize (1)', () => {
    expect(capitalize('fatih')).toBe('Fatih');
});

it('capitalize (2)', () => {
    expect(capitalize('allah')).toBe('Allah');
});