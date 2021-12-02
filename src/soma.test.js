const Soma = require('./soma');
// const {expect, test} = require('jest');

test('Soma é verdadeiro para 200 + 200', () => {
    expect(Soma(200, 200)).toBe(400);
})