const sum =(a,b) =>{
    return a + b 
}
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return Number(valueInDollar.toFixed(2))
}

const fromDollarToYen = function(valueInDollar) {
    
    let valueInEuro = valueInDollar / oneEuroIs.USD
    
    let valueInYen = valueInEuro * oneEuroIs.JPY
    
    return Number(valueInYen.toFixed(2))
}

const fromYenToPound = function(valueInYen) {
    
    let valueInEuro = valueInYen / oneEuroIs.JPY
    
    let valueInPound = valueInEuro * oneEuroIs.GBP
    
    return Number(valueInPound.toFixed(2))
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
