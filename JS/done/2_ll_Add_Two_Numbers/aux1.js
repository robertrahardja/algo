const arr = [1, 2, 3];
const node = (val) => ({
  val,
  next: null,
});

const AtoL = (arr) => {
  const sentinal = node(0);

  let current = sentinal;

  for (const num of arr) {
    current.next = node(num);
    current = current.next;
  }
  return sentinal.next;
};

const LtoA = (head) => {
  let arr = [];

  let current = head;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

// const revL = (head) => {
//   let aptr = null;
//   let bptr = head;
//
//   while (bptr !== null) {
//     const tempNext = bptr.next;
//
//     bptr.next = aptr;
//
//     aptr = bptr;
//
//     bptr = tempNext;
//   }
//
//   return aptr;
// };

const revL = (head) => {
  let aptr = null;
  let bptr = head;

  while (bptr) {
    const tempPtr = bptr.next;

    bptr.next = aptr;
    aptr = bptr;
    bptr = tempPtr;
  }

  return aptr;
};

const main = (arr) => {
  const templ = AtoL(arr);
  const temprl = revL(templ);
  const result = LtoA(temprl);
  return result;
};
console.log(main(arr).join(" -> "));
