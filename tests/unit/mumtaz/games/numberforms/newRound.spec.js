import { expect } from 'chai';
import { newRound, initialState } from '../../../../../src/mumtaz/games/numberforms';

describe('newRound', function () {

    it('each new round changes the number.', function () {

        const newState = newRound(initialState());
        expect(newState.round.number).not.to.be.null;

        const lastRoundNumber = newState.round.number;

        const nextState = newRound(newState);
        expect(nextState.round.number).not.to.eq(lastRoundNumber);
    });
});
