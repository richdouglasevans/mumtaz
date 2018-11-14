import Vue from 'vue';
import shuffle from 'lodash.shuffle';

const allLetters = Object.freeze([
    {
        name: 'a',
        image: 'a.svg',
        unicode: '&#x0905',
        romanization: 'a'
    },
    {
        name: 'aa',
        image: 'aa.svg',
        unicode: '&#x0906',
        romanization: 'ā'
    },
    {
        name: 'i',
        image: 'i.svg',
        unicode: '&#x0907',
        romanization: 'i'
    },
    {
        name: 'ii',
        image: 'ii.svg',
        unicode: '&#x0908',
        romanization: 'ī'
    },
    {
        name: 'ri',
        image: 'ri.svg',
        unicode: '&#x090B',
        romanization: 'ṛ'
    },
    // {
    //     name: 'rii',
    //     image: 'rii.svg',
    //     unicode: '&#x090B', // wrong
    //     romanization: 'ṝ'
    // },
    {
        name: 'li',
        image: 'li.svg',
        unicode: '&#x090C',
        romanization: 'ḷ'
    },
    // {
    //     name: 'lii',
    //     image: 'lii.svg',
    //     unicode: '&#x090C', // wrong
    //     romanization: 'ḷ'
    // },
    {
        name: 'u',
        image: 'u.svg',
        unicode: '&#x0909',
        romanization: 'u'
    },
    {
        name: 'uu',
        image: 'uu.svg',
        unicode: '&#x0910',
        romanization: 'ū'
    },
    {
        name: 'e',
        image: 'e.svg',
        unicode: '&#x090F',
        romanization: 'e'
    },
    {
        name: 'ai',
        image: 'ai.svg',
        unicode: '&#x090E',
        romanization: 'ai'
    },
    {
        name: 'o',
        image: 'o.svg',
        unicode: '&#x0913',
        romanization: 'o'
    },
    {
        name: 'au',
        image: 'au.svg',
        unicode: '&#x0914',
        romanization: 'au'
    },
    {
        name: 'ba',
        image: 'ba.svg',
        unicode: '&#x092C',
        romanization: 'ba'
    },
    {
        name: 'bha',
        image: 'bha.svg',
        unicode: '&#x092D',
        romanization: 'bha'
    },
    {
        name: 'ca',
        image: 'ca.svg',
        unicode: '&#x091A',
        romanization: 'ca'
    },
    {
        name: 'cha',
        image: 'cha.svg',
        unicode: '&#x091B',
        romanization: 'cha'
    },
    {
        name: 'da',
        image: 'da.svg',
        unicode: '&#x0926',
        romanization: 'da'
    },
    {
        name: 'dda',
        image: 'dda.svg',
        unicode: '&#x0921',
        romanization: 'ḍa'
    },
    {
        name: 'ddh',
        image: 'ddh.svg',
        unicode: '&#x0922',
        romanization: 'ḍha'
    },
    {
        name: 'dha',
        image: 'dha.svg',
        unicode: '&#x0927',
        romanization: 'dha'
    },
    {
        name: 'gha',
        image: 'gha.svg',
        unicode: '&#x0918',
        romanization: 'gha'
    },
    {
        name: 'ha',
        image: 'ha.svg',
        unicode: '&#x0939',
        romanization: 'ha'
    },
    {
        name: 'ja',
        image: 'ja.svg',
        unicode: '&#x091C',
        romanization: 'ja'
    },
    {
        name: 'jha',
        image: 'jha.svg',
        unicode: '&#x091D',
        romanization: 'jha'
    },
    {
        name: 'ka',
        image: 'ka.svg',
        unicode: '&#x0915',
        romanization: 'ka'
    },
    {
        name: 'kha',
        image: 'kha.svg',
        unicode: '&#x0916',
        romanization: 'kha'
    },
    {
        name: 'la',
        image: 'la.svg',
        unicode: '&#x0932',
        romanization: 'la'
    },
    {
        name: 'ma',
        image: 'ma.svg',
        unicode: '&#x092E',
        romanization: 'ma'
    },
    {
        name: 'nga',
        image: 'nga.svg',
        unicode: '&#x0919',
        romanization: 'ṅa'
    },
    {
        name: 'nna',
        image: 'nna.svg',
        unicode: '&#x0923',
        romanization: 'ṇa'
    },
    {
        name: 'nya',
        image: 'nya.svg',
        unicode: '&#x091E',
        romanization: 'ña'
    },
    {
        name: 'pa',
        image: 'pa.svg',
        unicode: '&#x092A',
        romanization: 'pa'
    },
    {
        name: 'pha',
        image: 'pha.svg',
        unicode: '&#x092B',
        romanization: 'pha'
    },
    {
        name: 'sa',
        image: 'sa.svg',
        unicode: '&#x0938',
        romanization: 'sa'
    },
    {
        name: 'sha',
        image: 'sha.svg',
        unicode: '&#x0936',
        romanization: 'śa'
    },
    {
        name: 'ssa',
        image: 'ssa.svg',
        unicode: '&#x0937',
        romanization: 'ṣa'
    },
    {
        name: 'tha',
        image: 'tha.svg',
        unicode: '&#x0925',
        romanization: 'tha'
    },
    {
        name: 'ttha',
        image: 'ttha.svg',
        unicode: '&#x0920',
        romanization: 'ṭha'
    },
    {
        name: 'va',
        image: 'va.svg',
        unicode: '&#x0935',
        romanization: 'va'
    },
    {
        name: 'ya',
        image: 'ya.svg',
        unicode: '&#x092F',
        romanization: 'ya'
    }
].map(Object.freeze));

const indexOfRandomLetter = (range) => {
    let index = Math.floor((Math.random() * range));
    if (index >= range) {
        index = range - 1;
    }
    return index;
};

const pullFreshLetter = (letters) => {
    const lettersLeft = Object.keys(letters).length;
    let index = indexOfRandomLetter(lettersLeft);
    const letter = letters[index];
    Vue.delete(letters, index);
    return letter;
};

const otherLetters = (letters, chosenLetter) =>
    letters.filter(letter => letter.name !== chosenLetter.name);

const chooseSomeOtherLetters = (letters, numberOfOtherLetters = 2) => {
    return Array.from(Array(numberOfOtherLetters).keys())
        .map(() => {
            const index = indexOfRandomLetter(letters.length);
            const letter = letters[index];
            letters.splice(index, 1);
            return letter;
        });
};

const theyChoseTheCorrectLetter = (letterForThisRound, chosenLetter) =>
    letterForThisRound.name === chosenLetter.name

export const alphabet = {
    namespaced: true,
    state: () => {
        return {
            letters: [],
            round: {
                letter: null,
                transliterations: [],
                number: 0
            },
            streak: 0,
            longestStreak: 0,
            hasChosenAtLeastOnce: false
        };
    },
    mutations: {
        NEW_ROUND: function (state) {
            const chosenLetter = pullFreshLetter(state.letters);
            state.round = {
                letter: chosenLetter,
                transliterations: shuffle([
                    chosenLetter,
                    ...chooseSomeOtherLetters(otherLetters(allLetters, chosenLetter))
                ]),
                number: state.round.number + 1
            };
            state.letters = Object.values(state.letters);
        },
        INCREMENT_STREAK: function (state) {
            state.streak = state.streak + 1;
            if (state.longestStreak < state.streak) {
                state.longestStreak = state.streak;
            }
        },
        RESET_STREAK: function (state) {
            state.streak = 0;
        },
        HAS_CHOSEN_AT_LEAST_ONCE: function (state) {
            state.hasChosenAtLeastOnce = true;
        },
        RESET: function (state) {
            state.letters = Object.assign({}, allLetters);
            state.streak = 0;
            state.longestStreak = 0;
            state.round.number = 0;
            state.hasChosenAtLeastOnce = false;
        },
        RESET_LETTERS: function (state) {
            state.letters = Object.assign({}, allLetters);
        }
    },
    actions: {
        START_OVER: function ({ commit }) {
            commit('RESET');
            commit('NEW_ROUND');
        },
        NEW_ROUND_WITH_FRESH_LETTERS: function ({ commit }) {
            commit('RESET_LETTERS');
            commit('NEW_ROUND');
        },
        NEW_ROUND: function ({ commit, dispatch, state }) {
            if (Object.keys(state.letters).length === 0) {
                dispatch('NEW_ROUND_WITH_FRESH_LETTERS');
            } else {
                commit('NEW_ROUND');
            }
        },
        CHOOSE_LETTER: function ({ commit, dispatch, state }, chosenLetter) {
            commit('HAS_CHOSEN_AT_LEAST_ONCE');
            if (theyChoseTheCorrectLetter(state.round.letter, chosenLetter)) {
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
