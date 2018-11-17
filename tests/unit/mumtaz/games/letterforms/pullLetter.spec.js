import { expect } from 'chai';
import { pullLetter } from '../../../../../src/mumtaz/games/letterforms';

describe('pullLetter', function () {

    it('yields the pulled letter and the reduced pool of remaining letters.', function () {
        const originalLetters = Object.freeze([
            Object.freeze({ name: 'a' }),
            Object.freeze({ name: 'b' }),
            Object.freeze({ name: 'c' })
        ]);

        const [letter, remainingLetters] = pullLetter(originalLetters);

        expect(originalLetters).to.contain(letter);
        expect(remainingLetters).not.to.contain(letter);
    });
});
