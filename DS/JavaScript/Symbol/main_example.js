// Symbol creation and usage
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description'); // Note: sym2 !== sym3

// Using symbols as object properties
const obj = {
    [sym1]: 'value1',
    [Symbol('key')]: 'value2'
};

// Symbol properties
console.log('Symbol description:', sym2.description);
console.log('Symbol toString:', sym2.toString());

// Well-known symbols
const iterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

// Symbol registry
const globalSym = Symbol.for('myGlobalSymbol');
const sameGlobalSym = Symbol.for('myGlobalSymbol');
console.log('Global symbols are the same:', globalSym === sameGlobalSym);

console.log('Symbol keys:', Object.getOwnPropertySymbols(obj));
console.log('Iterating custom iterable:', [...iterable]);
