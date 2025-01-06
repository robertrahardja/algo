// WeakMap demonstration
let obj1 = { id: 1 };
let obj2 = { id: 2 };

const weakMap = new WeakMap();

// Setting entries
weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

// Getting values
console.log('Value for obj1:', weakMap.get(obj1));
console.log('Has obj2:', weakMap.has(obj2));

// WeakMap keeps weak references
console.log('Before nullifying:', weakMap.has(obj1));
obj1 = null;
// After garbage collection, the entry for obj1 will be removed

// Practical use case: private data
const privateData = new WeakMap();

class PrivateClass {
    constructor() {
        privateData.set(this, {
            hidden: 'This is private data'
        });
    }

    getPrivateData() {
        return privateData.get(this).hidden;
    }
}

const instance = new PrivateClass();
console.log('Private data:', instance.getPrivateData());
