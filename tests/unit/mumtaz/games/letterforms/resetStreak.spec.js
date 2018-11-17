import { expect } from 'chai';
import { resetStreak } from '../../../../../src/mumtaz/games/letterforms';

describe('resetStreak', function () {

    it('sets the streak to 0.', function () {
        const state = { streak: 7};
        const newState = resetStreak(state);
        expect(newState.streak).to.equal(0);
    });
});
