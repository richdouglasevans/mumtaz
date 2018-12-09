import shuffle from 'lodash.shuffle';
import { others } from './support/others';
import { randomValue } from './support/randomValue';
import { randomValues } from './support/randomValues';
import { isEmptyObject } from './support/isEmptyObject';
import {
    consonants as allConsonants,
    vowels as allVowels
} from '../alphabet';

export {
    resetStreak,
    incrementStreak
} from './support/streak';

export const initialState = () => ({
    vowels: allVowels(),
    consonants: allConsonants(),
    round: {
        conjunction: {
            vowel: null,
            consonant: null
        },
        choices: []
    },
    streak: 0,
    longestStreak: 0,
    hasChosenAtLeastOnce: false
});

export const newRound = (state) => {
    let [newVowel, remainingVowels] = randomValue(state.vowels);
    const [newConsonant, remainingConsonants] = randomValue(state.consonants);

    const conjunction = {
        vowel: newVowel,
        consonant: newConsonant
    };

    const otherConjunctions = randomValues(
        (vowel) => ({
            vowel,
            consonant: conjunction.consonant
        }),
        others(allVowels(), conjunction.vowel)
    );

    return Object.assign(
        {},
        state,
        {
            vowels: remainingVowels,
            consonants: remainingConsonants,
            round: {
                conjunction,
                choices: shuffle([
                    conjunction,
                    ...otherConjunctions
                ])
            }
        }
    );
};

export const refresh = (state) => Object.assign({}, state, {
    vowels: allVowels(),
    consonants: allConsonants()
});

export function conjunctionMatches(conjunction, other) {
    return conjunction.consonant.name === other.consonant.name
        && conjunction.vowel.name === other.vowel.name;
}

export const vowelsAreExhausted = isEmptyObject;
