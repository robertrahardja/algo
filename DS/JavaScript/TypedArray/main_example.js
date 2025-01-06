// TypedArray demonstrations
const buffer = new ArrayBuffer(16);

// Creating different views of the same buffer
const int32View = new Int32Array(buffer);
const float64View = new Float64Array(buffer);
const uint8View = new Uint8Array(buffer);

// Setting values
int32View[0] = 42;
float64View[1] = 123.456;

// Different typed arrays
const int8Array = new Int8Array([1, 2, 3, 4]);
const uint16Array = new Uint16Array(5);
const float32Array = new Float32Array([1.1, 2.2, 3.3]);

// TypedArray methods
console.log('Int8Array:', int8Array);
console.log('Set value:', uint16Array.set([1, 2], 2));
console.log('Subarray:', float32Array.subarray(1, 2));

// Buffer information
console.log('Buffer byteLength:', buffer.byteLength);
console.log('Int32 byteLength:', int32View.byteLength);
console.log('Float64 byteLength:', float64View.byteLength);

// Converting to regular array
console.log('As array:', Array.from(int8Array));
