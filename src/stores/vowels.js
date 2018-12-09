import {
    initialState,
    newRound,
    resetStreak,
    refresh,
    incrementStreak,
    conjunctionMatches,
    vowelsAreExhausted
} from '../mumtaz/games/vowels';

export const Mutations = {
    Reset: 'RESET',
    NewRound: 'NEW_ROUND',
    IncrementStreak: 'INCREMENT_STREAK',
    ResetStreak: 'RESET_STREAK',
    Refresh: 'REFRESH',
    HasChosenAtLeastOnce: 'HAS_CHOSEN_AT_LEAST_ONCE'
};

export const Actions = {
    StartOver: 'START_OVER',
    NewRound: 'NEW_ROUND',
    ChooseConjunction: 'CHOOSE_CONJUNCTION'
};

export const vowels = {
    namespaced: true,
    state: initialState,
    mutations: {
        [Mutations.Reset]: function (state) {
            Object.assign(state, initialState());
        },
        [Mutations.NewRound]: function (state) {
            Object.assign(state, newRound(state));
        },
        [Mutations.IncrementStreak]: function (state) {
            Object.assign(state, incrementStreak(state));
        },
        [Mutations.ResetStreak]: function (state) {
            Object.assign(state, resetStreak(state));
        },
        [Mutations.HasChosenAtLeastOnce]: function (state) {
            state.hasChosenAtLeastOnce = true;
        },
        [Mutations.Refresh]: function (state) {
            Object.assign(state, refresh(state));
        }
    },
    actions: {
        [Actions.StartOver]: function ({ commit }) {
            commit(Mutations.Reset);
            commit(Mutations.NewRound);
        },
        [Actions.NewRound]: function ({ commit, state }) {
            if (vowelsAreExhausted(state.vowels)) {
                commit(Mutations.Refresh);
            }
            commit(Mutations.NewRound);
        },
        [Actions.ChooseConjunction]: function ({ commit, dispatch, state }, conjunction) {
            commit(Mutations.HasChosenAtLeastOnce);
            if (conjunctionMatches(state.round.conjunction, conjunction)) {
                commit(Mutations.IncrementStreak);
                dispatch(Actions.NewRound);
            } else {
                commit(Mutations.ResetStreak);
            }
        }
    }
};
