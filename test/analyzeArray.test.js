import analyzeArray from '../src/analyzeArray';

it('floating average', () => {
    expect(analyzeArray([1,5,17,21,31,24])).toEqual({
        average: 16.5,
        min: 1,
        max: 31,
        length: 6
    });
});

it('3 digits', () => {
    expect(analyzeArray([802, 101, 13, 141, 8])).toEqual({
        average: 213,
        min: 8,
        max: 802,
        length: 5
    });
});

it('just 0', () => {
    expect(analyzeArray([0, 0, 0, 0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 4
    });
});

it('negatives', () => {
    expect(analyzeArray([-3, -21, -4])).toEqual({
        average: -9.4,
        min: -21,
        max: -3,
        length: 3
    });
}); 

it('integers', () => {
    expect(analyzeArray([0, -12, 14, 673, 32, 9 , 8, -42, 321, 67, -374])).toEqual({
        average: 63.2,
        min: -374,
        max: 673,
        length: 11
    });
});

it('floats', () => {
    expect(analyzeArray([2.3, 2.34, 4.2444, 8.51])).toEqual({
        average: 4.3,
        min: 2.3,
        max: 8.51,
        length: 4
    });
});