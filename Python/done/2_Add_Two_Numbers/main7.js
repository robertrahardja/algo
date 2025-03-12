const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function LtoA(head) {
  const arr = [];

  let current = head;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

function AtoL(arr) {
  const sentinal = new Node(0);
  let current = sentinal;

  for (let num of arr) {
    current.next = new Node(num);
    current = current.next;
  }

  return sentinal.next;
}

function rl(head) {
  if (!head || !head.next) {
    return head;
  }

  const res = rl(head.next);

  head.next.next = head;

  head.next = null;

  return res;
}

const l1 = AtoL(arr1);
const l2 = AtoL(arr2);

const main = (l1, l2) => {
  const sentinal = new Node(0);
  let current = sentinal;

  let carry = 0;

  let l1ptr = l1;
  let l2ptr = l2;

  while (l1ptr || l2ptr || carry) {
    const l1d = l1ptr?.val ?? 0;
    const l2d = l2ptr?.val ?? 0;

    const total = l1d + l2d + carry;

    carry = Math.floor(total / 10);

    current.next = new Node(total % 10);
    current = current.next;

    l1ptr = l1ptr?.next ?? null;
    l2ptr = l2ptr?.next ?? null;
  }

  return sentinal.next;
};

console.log(LtoA(rl(main(l1, l2))).join(""));
