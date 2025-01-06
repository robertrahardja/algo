// Map operations
const userMap = new Map();

// Adding entries
userMap.set('john', { age: 30, role: 'developer' });
userMap.set('alice', { age: 25, role: 'designer' });

// Getting values
const john = userMap.get('john');
const hasAlice = userMap.has('alice');

// Iteration
console.log('Map entries:');
for (const [key, value] of userMap) {
    console.log(`${key}: ${JSON.stringify(value)}`);
}

// Map operations
console.log('Map size:', userMap.size);
userMap.delete('alice');
console.log('After deletion size:', userMap.size);

// Converting to arrays
const keys = Array.from(userMap.keys());
const values = Array.from(userMap.values());
console.log('Keys:', keys);
console.log('Values:', values);
