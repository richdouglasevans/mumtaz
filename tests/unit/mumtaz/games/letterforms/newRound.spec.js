import { expect } from 'chai';
import { newRound, initialState } from '../../../../../src/mumtaz/games/letterforms';

describe('newRound', function () {

    it('each new round changes the letter.', function () {

        const newState = newRound(initialState());
        expect(newState.round.letter).not.to.be.null;

        const lastRoundLetter = newState.round.letter;

        const nextState = newRound(newState);
        expect(nextState.round.letter).not.to.eq(lastRoundLetter);
    });
});
