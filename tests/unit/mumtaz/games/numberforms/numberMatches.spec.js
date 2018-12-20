import { expect } from 'chai';
import { numbers as allNumbers } from '../../../../../src/mumtaz/numbers';
import { chosenNumberMatches } from '../../../../../src/mumtaz/games/numberforms';

describe('chosenNumberMatches', function () {

    it('returns true when the numbers match.', function () {
        const someNumber = allNumbers()[0];

        const matches = chosenNumberMatches(someNumber, someNumber);

        expect(matches).to.be.true;
    });

    it('returns false when the numbers don\'t match.', function () {
        const someNumber = allNumbers()[0];
        const otherNumber = allNumbers()[1];

        const matches = chosenNumberMatches(someNumber, otherNumber);

        expect(matches).to.be.false;
    });
});
