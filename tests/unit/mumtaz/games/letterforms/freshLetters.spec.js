import { expect } from 'chai';
import { freshLetters } from '../../../../../src/mumtaz/games/letterforms';
import { letters as allLetters } from '../../../../../src/mumtaz/alphabet';

describe('freshLetters', function () {

    it('yields fresh letters.', function () {
        const originalState = Object.freeze({
            letters: Object.freeze([
                Object.freeze({ name: 'a' }),
                Object.freeze({ name: 'b' }),
                Object.freeze({ name: 'c' })
            ])
        });

        const newState = freshLetters(originalState);

        expect(Object.keys(newState.letters).length).to.equal(allLetters().length);
    });
});
