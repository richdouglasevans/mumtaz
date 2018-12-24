import {
    initialState,
    newRound,
    resetStreak,
    refresh,
    incrementStreak,
    numbersAreExhausted,
    itIsTheNextNumber
} from '../mumtaz/games/nextNumber';

export const Mutations = {
    Reset: 'RESET',
    NewRound: 'NEW_ROUND',
    IncrementStreak: 'INCREMENT_STREAK',
    ResetStreak: 'RESET_STREAK',
    Refresh: 'REFRESH',
    HasChosenAtLeastOnce: 'HAS_CHOSEN_AT_LEAST_ONCE',
    ChooseNumber: 'CHOOSE_NUMBER',
    ClearChosenNumber: 'CLEAR_CHOSEN_NUMBER'
};

export const Actions = {
    StartOver: 'START_OVER',
    NewRound: 'NEW_ROUND',
    ChooseNumber: 'CHOOSE_NUMBER'
};

export const nextNumber = {
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
        },
        [Mutations.ChooseNumber]: function (state, chosenNumber) {
            state.chosenNumber = chosenNumber;
        },
        [Mutations.ClearChosenNumber]: function (state) {
            state.chosenNumber = null;
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
            commit(Mutations.ChooseNumber, chosenNumber);
            if (itIsTheNextNumber(state.round.number.value, chosenNumber)) {
                commit(Mutations.IncrementStreak);
                dispatch(Actions.NewRound);
            } else {
                commit(Mutations.ResetStreak);
                commit(Mutations.ClearChosenNumber);
            }
        }
    }
};
