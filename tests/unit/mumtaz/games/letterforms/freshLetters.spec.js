import { expect } from 'chai';
import { freshLetters } from '../../../../../src/mumtaz/games/letterforms';
import { letters as allLetters } from '../../../../../src/mumtaz/alphabet';

describe('freshLetters', function () {

    it('yields fresh letters.', function () {
        const originalState = Object.freeze({
            letters: Object.freeze([
                { name: 'a' },
                { name: 'b' },
                { name: 'c' }
            ]).map(Object.freeze)
        });

        const newState = freshLetters(originalState);

        expect(Object.keys(newState.letters).length).to.equal(allLetters().length);
    });
});
