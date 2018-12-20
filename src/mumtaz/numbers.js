import freeze from 'deep-freeze-node';

const allNumbers = freeze([
    {
        name: '0',
        value: 0,
        encodings: { htmlEntityHex: '&#x966;' },
        romanization: 'śūnya',
        inSanskrit: 'शून्य'
    },
    {
        name: '1',
        value: 1,
        encodings: { htmlEntityHex: '&#x967;' },
        romanization: 'éka',
        inSanskrit: 'एक'
    },
    {
        name: '2',
        value: 2,
        encodings: { htmlEntityHex: '&#x968;' },
        romanization: 'dvi',
        inSanskrit: 'द्वि'
    },
    {
        name: '3',
        value: 3,
        encodings: { htmlEntityHex: '&#x969;' },
        romanization: 'tri',
        inSanskrit: 'त्रि'
    },
    {
        name: '4',
        value: 4,
        encodings: { htmlEntityHex: '&#x96A;' },
        romanization: 'catúr',
        inSanskrit: 'चतुर्'
    },
    {
        name: '5',
        value: 5,
        encodings: { htmlEntityHex: '&#x96B;' },
        romanization: 'pañca',
        inSanskrit: 'पञ्च'
    },
    {
        name: '6',
        value: 6,
        encodings: { htmlEntityHex: '&#x96C;' },
        romanization: 'ṣáṣ',
        inSanskrit: 'षष्'
    },
    {
        name: '7',
        value: 7,
        encodings: { htmlEntityHex: '&#x96D;' },
        romanization: 'saptá',
        inSanskrit: 'सप्त'
    },
    {
        name: '8',
        value: 8,
        encodings: { htmlEntityHex: '&#x96E;' },
        romanization: 'aṣṭá',
        inSanskrit: 'अष्ट'
    },
    {
        name: '9',
        value: 9,
        encodings: { htmlEntityHex: '&#x96F;' },
        romanization: 'náva',
        inSanskrit: 'नव'
    }
]);

export const numbers = () => allNumbers;
