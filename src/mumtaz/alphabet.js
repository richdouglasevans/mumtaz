export const LetterTypes = Object.freeze({
    Vowel: 1,
    Consonant: 2
});

export function isVowel(letter) {
    return !!letter && letter.letterType === LetterTypes.Vowel;
}

export function isConsonant(letter) {
    return !!letter && letter.letterType === LetterTypes.Consonant;
}

const allLetters = Object.freeze([
    {
        name: 'a',
        encodings: { htmlEntityHex: '&#x0905' },
        romanization: 'a',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'aa',
        encodings: { htmlEntityHex: '&#x0906' },
        romanization: 'ā',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'i',
        encodings: { htmlEntityHex: '&#x0907' },
        romanization: 'i',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'ii',
        encodings: { htmlEntityHex: '&#x0908' },
        romanization: 'ī',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'ri',
        encodings: { htmlEntityHex: '&#x090B' },
        romanization: 'ṛ',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'rii',
        encodings: { htmlEntityHex: '&#x0960' },
        romanization: 'ṝ',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'li',
        encodings: { htmlEntityHex: '&#x090C' },
        romanization: 'ḷ',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'lii',
        encodings: { htmlEntityHex: '&#x0961' },
        romanization: 'l̥̄',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'u',
        encodings: { htmlEntityHex: '&#x0909' },
        romanization: 'u',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'uu',
        encodings: { htmlEntityHex: '&#x0910' },
        romanization: 'ū',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'e',
        encodings: { htmlEntityHex: '&#x090F' },
        romanization: 'e',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'ai',
        encodings: { htmlEntityHex: '&#x090E' },
        romanization: 'ai',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'o',
        encodings: { htmlEntityHex: '&#x0913' },
        romanization: 'o',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'au',
        encodings: { htmlEntityHex: '&#x0914' },
        romanization: 'au',
        letterType: LetterTypes.Vowel
    },
    {
        name: 'ba',
        encodings: { htmlEntityHex: '&#x092C' },
        romanization: 'ba',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'bha',
        encodings: { htmlEntityHex: '&#x092D' },
        romanization: 'bha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ca',
        encodings: { htmlEntityHex: '&#x091A' },
        romanization: 'ca',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'cha',
        encodings: { htmlEntityHex: '&#x091B' },
        romanization: 'cha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'da',
        encodings: { htmlEntityHex: '&#x0926' },
        romanization: 'da',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'dda',
        encodings: { htmlEntityHex: '&#x0921' },
        romanization: 'ḍa',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ddh',
        encodings: { htmlEntityHex: '&#x0922' },
        romanization: 'ḍha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'dha',
        encodings: { htmlEntityHex: '&#x0927' },
        romanization: 'dha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'gha',
        encodings: { htmlEntityHex: '&#x0918' },
        romanization: 'gha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ha',
        encodings: { htmlEntityHex: '&#x0939' },
        romanization: 'ha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ja',
        encodings: { htmlEntityHex: '&#x091C' },
        romanization: 'ja',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'jha',
        encodings: { htmlEntityHex: '&#x091D' },
        romanization: 'jha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ka',
        encodings: { htmlEntityHex: '&#x0915' },
        romanization: 'ka',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'kha',
        encodings: { htmlEntityHex: '&#x0916' },
        romanization: 'kha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'la',
        encodings: { htmlEntityHex: '&#x0932' },
        romanization: 'la',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ma',
        encodings: { htmlEntityHex: '&#x092E' },
        romanization: 'ma',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'nga',
        encodings: { htmlEntityHex: '&#x0919' },
        romanization: 'ṅa',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'nna',
        encodings: { htmlEntityHex: '&#x0923' },
        romanization: 'ṇa',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'nya',
        encodings: { htmlEntityHex: '&#x091E' },
        romanization: 'ña',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'pa',
        encodings: { htmlEntityHex: '&#x092A' },
        romanization: 'pa',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'pha',
        encodings: { htmlEntityHex: '&#x092B' },
        romanization: 'pha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'sa',
        encodings: { htmlEntityHex: '&#x0938' },
        romanization: 'sa',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'sha',
        encodings: { htmlEntityHex: '&#x0936' },
        romanization: 'śa',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ssa',
        encodings: { htmlEntityHex: '&#x0937' },
        romanization: 'ṣa',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'tha',
        encodings: { htmlEntityHex: '&#x0925' },
        romanization: 'tha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ttha',
        encodings: { htmlEntityHex: '&#x0920' },
        romanization: 'ṭha',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'va',
        encodings: { htmlEntityHex: '&#x0935' },
        romanization: 'va',
        letterType: LetterTypes.Consonant
    },
    {
        name: 'ya',
        encodings: { htmlEntityHex: '&#x092F' },
        romanization: 'ya',
        letterType: LetterTypes.Consonant
    }
].map(Object.freeze));

const allVowels = Object.freeze(allLetters.filter(isVowel));

const allConsonants = Object.freeze(allLetters.filter(isConsonant));

export const letters = () => allLetters;

export const vowels = () => allVowels;

export const consonants = () => allConsonants;
