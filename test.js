const { sum, fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

describe('Función sum', () => {
    test('adds 14 + 9 to equal 23', () => {
        let total = sum(14, 9);
        expect(total).toBe(23);
    })
})

describe('Conversión de Euros a Dólares', () => {
    test("One euro should be 1.07 dollars", function () {
        // Uso la función como debe ser usada
        const dollars = fromEuroToDollar(3.5);

        // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.75)
        const expected = 3.75;

        // Hago mi comparación (la prueba)
        expect(dollars).toBe(expected);
    })
})

describe('Conversión de Dólares a Yenes', () => {
    test("One dollar should be 146.26 yens", function () {
        const yens = fromDollarToYen(1);
        const expected1 = 146.26;
        expect(yens).toBe(expected1);
    })
})

describe('Conversión de Yenes a Libras', () => {
    test("two yen should be 0.01 pounds", function () {
        const pounds = fromYenToPound(2);
        const expected2 = 0.01;
        expect(pounds).toBe(expected2);
    })
})