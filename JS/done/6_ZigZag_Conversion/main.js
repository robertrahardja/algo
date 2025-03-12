const main = (s, numRows) => {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows = Array(numRows).fill("");

  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};

// Test cases

console.log(main("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(main("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
