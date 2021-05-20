// sum.test.js

test('adds 1 + 2 to equal 3', () => {

    expect(1 + 2).toBe(3);

});



import { sum } from '../scripts/sum.js';

// Now, we can write another test calling the sum() function to test its output:

test('adds 1 + 2 to equal 3', () => {

    expect(sum(1,2)).toBe(3);

});