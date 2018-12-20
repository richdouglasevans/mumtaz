import {
    initialState,
    newRound,
    resetStreak,
    refresh,
    incrementStreak,
    numbersAreExhausted,
    chosenNumberMatches
} from '../mumtaz/games/numberforms';

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
    ChooseNumber: 'CHOOSE_NUMBER'
};

export const numberforms = {
    namespaced: true,
    state: initialState,
    mutations: {
        [Mutations.NewRound]: function(state) {
            Object.assign(state, newRound(state));
        },
        [Mutations.IncrementStreak]: function(state) {
            Object.assign(state, incrementStreak(state));
        },
        [Mutations.ResetStreak]: function (state) {
            Object.assign(state, resetStreak(state));
        },
        [Mutations.HasChosenAtLeastOnce]: function (state) {
            state.hasChosenAtLeastOnce = true;
        },
        [Mutations.Reset]: function (state) {
            Object.assign(state, initialState());
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
            if (numbersAreExhausted(state.numbers)) {
                commit(Mutations.Refresh);
            }
            commit(Mutations.NewRound);
        },
        [Actions.ChooseNumber]: function ({ commit, dispatch, state }, chosenNumber) {
            commit(Mutations.HasChosenAtLeastOnce);
            if (chosenNumberMatches(state.round.number, chosenNumber)) {
                commit(Mutations.IncrementStreak);
                dispatch(Actions.NewRound);
            } else {
                commit(Mutations.ResetStreak);
            }
        }
    }
};
