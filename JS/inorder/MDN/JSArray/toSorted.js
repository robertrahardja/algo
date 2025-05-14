const months = ['March', 'Jan', 'Feb', 'Dec'];

const ansMonths = months.toSorted();
const ansMonthsDesc = months.toSorted().reverse()

const values = [1, 30, 4, 21];

const ansValues = values.toSorted((a, b) => a - b);
const ansValuesDesc = values.toSorted((a, b) => b - a);


// Define mapping of month names to their numerical order
const monthOrder = {
  'Jan': 0,
  'Feb': 1,
  'March': 2,
  'April': 3,
  'May': 4,
  'June': 5,
  'July': 6,
  'Aug': 7,
  'Sept': 8,
  'Sep': 8,
  'October': 9,
  'Oct': 9,
  'November': 10,
  'Nov': 10,
  'December': 11,
  'Dec': 11
};

// Use toSorted() to create a new sorted array
const sortedMonths = months.toSorted((a, b) => {
  return monthOrder[a] - monthOrder[b];
});

console.log(sortedMonths); // ['Jan', 'Feb', 'March', 'Dec']
console.log(months);       // ['March', 'Jan', 'Feb', 'Dec'] (original remains unchanged)
