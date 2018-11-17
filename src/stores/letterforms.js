import {
    initialState,
    newRound,
    resetStreak,
    freshLetters,
    incrementStreak,
    lettersAreExhausted,
    chosenLetterMatches
} from '../mumtaz/games/letterforms';

export const letterforms = {
    namespaced: true,
    state: initialState,
    mutations: {
        NEW_ROUND: function(state) {
            Object.assign(state, newRound(state));
        },
        INCREMENT_STREAK: function(state) {
            Object.assign(state, incrementStreak(state));
        },
        RESET_STREAK: function (state) {
            Object.assign(state, resetStreak(state));
        },
        HAS_CHOSEN_AT_LEAST_ONCE: function (state) {
            state.hasChosenAtLeastOnce = true;
        },
        RESET: function (state) {
            Object.assign(state, initialState());
        },
        FRESH_LETTERS: function (state) {
            Object.assign(state, freshLetters(state));
        }
    },
    actions: {
        START_OVER: function ({ commit }) {
            commit('RESET');
            commit('NEW_ROUND');
        },
        NEW_ROUND: function ({ commit, state }) {
            if (lettersAreExhausted(state.letters)) {
                commit('FRESH_LETTERS');
            }
            commit('NEW_ROUND');
        },
        CHOOSE_LETTER: function ({ commit, dispatch, state }, chosenLetter) {
            commit('HAS_CHOSEN_AT_LEAST_ONCE');
            if (chosenLetterMatches(state.round.letter, chosenLetter)) {
                commit('INCREMENT_STREAK');
                setTimeout(() => {
                    dispatch('NEW_ROUND');
                }, 500);
            } else {
                commit('RESET_STREAK');
            }
        }
    }
};
