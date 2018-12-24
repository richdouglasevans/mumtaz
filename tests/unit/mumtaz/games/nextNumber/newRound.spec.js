import { expect } from 'chai';
import { newRound, initialState } from '../../../../../src/mumtaz/games/nextNumber';

describe('newRound', function () {

    it('each new round blanks the chosen number.', function () {

        const newState = newRound(initialState());
        newState.chosenNumber = 2;

        const nextState = newRound(newState);
        expect(nextState.chosenNumber).to.eq(null);
    });
});
