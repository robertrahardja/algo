const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];

// const node = (val) => {
//   return {
//     val: val,
//     next: null,
//   };
// };

const node = (val) => ({ val, next: null });

const LtoA = (head) => {
  const arr = [];

  let current = head;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
};

const AtoL = (arr) => {
  const sentinal = node(0);
  let current = sentinal;

  for (const num of arr) {
    current.next = node(num);
    current = current.next;
  }

  return sentinal.next;
};

const revl = (head) => {
  if (!head || !head.next) {
    return head;
  }

  const reversedl = revl(head.next);

  head.next.next = head;
  head.next = null;

  return reversedl;
};

const l1 = AtoL(arr1);
const l2 = AtoL(arr2);

const main = (l1, l2) => {
  const sentinal = node(0);

  let current = sentinal;

  let l1ptr = l1;
  let l2ptr = l2;

  let carry = 0;

  while (l1ptr || l2ptr || carry) {
    const l1num = l1ptr?.val ?? 0;
    const l2num = l2ptr?.val ?? 0;

    const total = l1num + l2num + carry;

    carry = Math.floor(total / 10);

    current.next = node(total % 10);
    current = current.next;

    l1ptr = l1ptr?.next ?? null;
    l2ptr = l2ptr?.next ?? null;
  }

  return sentinal.next;
};

console.log(LtoA(revl(main(l1, l2))).join(""));
