// jest.setup.js
// make all console.log calls yellow
// const originalConsoleLog = global.console.log;
//
// global.console.log = (...args) => {
//   const colorizeOutput = (arg) => {
//     if (typeof arg === 'string') {
//       return `\x1b[33m${arg}\x1b[0m`; // Yellow for strings
//     }
//     return arg;
//   };
//
//   originalConsoleLog(...args.map(colorizeOutput));
// };
const originalLog = console.log;
console.log = (...args) => originalLog(...args.map(arg =>
  typeof arg === 'string' ? `\x1b[33m${arg}\x1b[0m` : arg
));

// main.test.js

const mainArr = []

for (let i = 1; i <= 2; i++) {
  const main = require(`./main${i}.js`).main;

  mainArr.push({ file: `./main${i}.js`, func: main });

}

mainArr.forEach(({ file, func }) => {
  console.log('start test on file:', file);
  describe('main function (Two Sum)', () => {
    test('returns indices of two numbers that add up to target', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      expect(func(nums, target)).toEqual([0, 1]);
    });

    test('returns correct indices when answer is not the first two elements', () => {
      const nums = [3, 2, 4];
      const target = 6;
      expect(func(nums, target)).toEqual([1, 2]);
    });

    test('returns correct indices with duplicate numbers', () => {
      const nums = [3, 3];
      const target = 6;
      expect(func(nums, target)).toEqual([0, 1]);
    });

    test('returns empty array when no solution exists', () => {
      const nums = [2, 7, 11, 15];
      const target = 30;
      expect(func(nums, target)).toEqual([]);
    });

    test('works with negative numbers', () => {
      const nums = [-1, -2, -3, -4, -5];
      const target = -8;
      expect(func(nums, target)).toEqual([2, 4]);
    });

    test('works with empty array input', () => {
      const nums = [];
      const target = 9;
      expect(func(nums, target)).toEqual([]);
    });
  });
})
