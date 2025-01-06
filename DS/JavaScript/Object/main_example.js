// Object creation and manipulation
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Boston',
        country: 'USA'
    }
};

// Object methods
console.log('Object keys:', Object.keys(person));
console.log('Object values:', Object.values(person));
console.log('Object entries:', Object.entries(person));

// Property descriptors
Object.defineProperty(person, 'id', {
    value: 12345,
    writable: false,
    enumerable: true,
    configurable: false
});

// Object spreading and merging
const personalInfo = { hobby: 'reading', pet: 'dog' };
const merged = { ...person, ...personalInfo };

// Object freezing and sealing
const frozen = Object.freeze({ x: 1, y: 2 });
const sealed = Object.seal({ a: 1, b: 2 });

console.log('Merged object:', merged);
console.log('Property descriptor:', Object.getOwnPropertyDescriptor(person, 'id'));
