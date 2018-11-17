import { expect } from 'chai';
import { incrementStreak } from '../../../../../src/mumtaz/games/letterforms';

describe('incrementStreak', function () {

    it('increments the existing streak by 1.', function () {
        const state = { streak: 7 };
        const newState = incrementStreak(state);
        expect(newState.streak).to.equal(8);
    });

    it('sets the longest streak to equal the streak when the streak is longer than the current longest streak.', function () {
        const state = { streak: 7, longestStreak: 7 };
        const newState = incrementStreak(state);
        expect(newState.streak).to.equal(8);
        expect(newState.longestStreak).to.equal(8);
    });

    it('does not change the longest streak when the streak is less than the current longest streak.', function () {
        const state = { streak: 7, longestStreak: 12 };
        const newState = incrementStreak(state);
        expect(newState.streak).to.equal(8);
        expect(newState.longestStreak).to.equal(12);
    });

    it('does not change the longest streak when the incremented streak is equal to the current longest streak.', function () {
        const state = { streak: 7, longestStreak: 8 };
        const newState = incrementStreak(state);
        expect(newState.streak).to.equal(8);
        expect(newState.longestStreak).to.equal(8);
    });
});
