import { expect } from 'chai';
import freeze from 'deep-freeze-node';
import { randomValue } from '../../../../../src/mumtaz/games/support/randomValue';

describe('randomValue', function () {
    it('yields the pulled value and the remaining values.', function () {
        const originalValues = freeze([
            { name: 'a' },
            { name: 'b' },
            { name: 'c' }
        ]);

        const [value, remainingValues] = randomValue(originalValues);

        expect(originalValues).to.contain(value);
        expect(remainingValues).not.to.contain(value);
        expect(remainingValues.length).to.eq(2,
            'The remaining values must be compact.');
    });
});
