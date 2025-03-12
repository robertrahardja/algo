const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];

class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

function toArray(llist) {
  const result = [];
  let current = llist.head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

function fromArr(arr) {
  const node0 = new Node();
  let current = node0;

  for (let num of arr) {
    current.next = new Node(num);
    current = current.next;
  }

  const result = new LinkedList();
  result.head = node0.next;
  return result;
}

function addTwoLinkedLists(firstList, secondList) {
  const node0 = new Node(0);
  let carry = 0;
  let current = node0;

  let firstListPtr = firstList.head;
  let secondListPtr = secondList.head;

  while (firstListPtr || secondListPtr || carry) {
    const digitFrmFirst = firstListPtr?.val ?? 0;
    const digitFrmSecond = secondListPtr?.val ?? 0;
    const sum = digitFrmFirst + digitFrmSecond + carry;

    carry = Math.floor(sum / 10);
    current.next = new Node(sum % 10);

    current = current.next;

    firstListPtr = firstListPtr?.next ?? null;
    secondListPtr = secondListPtr?.next ?? null;
  }

  const result = new LinkedList();
  result.head = node0.next;
  return result;
}

const list1 = fromArr(
  arr1,
);

const list2 = fromArr(arr2);

const answer = addTwoLinkedLists(list1, list2);

console.log(toArray(answer));
