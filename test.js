const {sum , fromDollarToYen, fromYenToPound, fromEuroToDollar} = require('./app.js');

test('adds 14 + 9 to equal 23', () =>{
    let total = sum (14,9);
    expect(total).toBe(23);
})
describe
test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(dollars)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yens", function() {

    const yens = fromDollarToYen(1);
 
    const expected1 = 146.27;

    expect(fromDollarToYen(yens)).toBe(expected1); 
})

test("One yen should be 0.0056 pounds", function() {

    const pounds = fromYenToPound(1);

    const expected2 = 0.0056;

    expect(fromYenToPound(pounds)).toBe(expected2); 
})