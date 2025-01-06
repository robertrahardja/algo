// WeakSet demonstration
let obj1 = { id: 1, name: 'Object 1' };
let obj2 = { id: 2, name: 'Object 2' };

const weakSet = new WeakSet();

// Adding objects
weakSet.add(obj1);
weakSet.add(obj2);

// Checking membership
console.log('Has obj1:', weakSet.has(obj1));
console.log('Has obj2:', weakSet.has(obj2));

// Practical use case: marking objects
const processedItems = new WeakSet();

function processObject(obj) {
    if (processedItems.has(obj)) {
        console.log('Object already processed');
        return;
    }
    
    console.log('Processing object:', obj.name);
    processedItems.add(obj);
}

// Using the marking system
processObject(obj1);
processObject(obj1); // Will log 'already processed'
processObject(obj2);

// WeakSet maintains weak references
console.log('Before nullifying:', weakSet.has(obj1));
obj1 = null;
// After garbage collection, obj1 will be removed from the WeakSet
