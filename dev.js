const { decode } = require('./src/index.js');

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
const result = "hello world";

console.log('result: ', decode(expr));
console.log('ожидание: ', result);
