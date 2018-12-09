import { expect } from 'chai';
import { newRound, initialState } from '../../../../../src/mumtaz/games/vowels';

describe('newRound', function () {
    it('changes the conjunction.', function () {
        const startingState = newRound(initialState());

        const nextState = newRound(startingState);

        expect(nextState.round.conjunction.vowel.name)
            .not.to.eq(startingState.round.conjunction.vowel.name);
    });
});
