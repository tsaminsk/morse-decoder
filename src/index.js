const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const _KEYS = {
        '**': '*',
        '00': '',
        '10': '.',
        '11': '-'
    }
    let result = ''
    for (let i = 0; i < Math.ceil(expr.length / 10); i++) {
        let key = ''
        for (let j = 0; j < 10; j += 2) {
            const start_pos = i * 10 + j
            key += _KEYS[expr.substring(start_pos, start_pos + 2)]
        }
        result += key == '*****' ? ' ' : MORSE_TABLE[key]
    }
    return result
}

module.exports = {
    decode
}