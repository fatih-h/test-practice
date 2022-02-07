import caesarCipher from '../src/caesarCipher';

it('shift (1)', () => {
    expect(caesarCipher('i am enjoying testing', 1)).toBe('j bn fokpzjoh uftujoh');
});

it('shift (2)', () => {
    expect(caesarCipher('web dev', 2)).toBe('ygd fgx');
});

it('shift (2) again', () => {
    expect(caesarCipher('web dev', 2)).toBe('ygd fgx');
});

it('shift (15)', () => {
    expect(caesarCipher('that is life', 15)).toBe('iwpi xh axut');
});

it('punctuation (7)', () => {
    expect(caesarCipher("don't forget!", 7)).toBe("kvu'a mvynla!");
});

it('punctuation (7) again', () => {
    expect(caesarCipher("don't forget!", 7)).toBe("kvu'a mvynla!");
});

it('punctuation (21)', () => {
    expect(caesarCipher("get swords, shilds and money!", 21)).toBe("bzo nrjmyn, ncdgyn viy hjizt!");
});


