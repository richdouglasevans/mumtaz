import { expect } from 'chai';
import freeze from 'deep-freeze-node';
import { refresh } from '../../../../../src/mumtaz/games/letterforms';
import { letters as allLetters } from '../../../../../src/mumtaz/alphabet';

describe('refresh', function () {
    it('yields fresh letters.', function () {
        const originalState = freeze({
            letters: [
                { name: 'a' },
                { name: 'b' },
                { name: 'c' }
            ]
        });

        const newState = refresh(originalState);

        expect(newState.letters.length)
            .to.equal(allLetters().length,
                'The letters must have been refreshed back to the entire alphabet.');
    });
});
