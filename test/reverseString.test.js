import reverseString from '../src/reverseString';

it('reverse string (1)', () => {
    expect(reverseString('Turkey')).toBe('yekruT');
});

it('reverse string (2)', () => {
    expect(reverseString('Eren')).toBe('nerE');
});

it('reverse string (3)', () => {
    expect(reverseString('ece')).toBe('ece');
});