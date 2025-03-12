const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];

class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LList {
  constructor() {
    this.head = null;
  }
}

function arrToLList(arr) {
  const nodeTemp = new Node();

  let current = nodeTemp;

  for (let num of arr) {
    current.next = new Node(num);
    current = current.next;
  }

  const result = new LList();
  result.head = nodeTemp.next;
  return result;
}

function LListToArr(llist) {
  const result = [];
  let current = llist.head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

const main = (firstList, secondList) => {
  const tempNode = new Node();
  let current = tempNode;

  let carry = 0;

  let list1ptr = firstList.head;
  let list2ptr = secondList.head;

  while (list1ptr || list2ptr || carry) {
    const val1 = list1ptr ? list1ptr.val : 0;
    const val2 = list2ptr ? list2ptr.val : 0;

    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    current.next = new Node(sum % 10);

    current = current.next;

    list1ptr = list1ptr?.next ?? null;
    list2ptr = list2ptr?.nex ?? null;
  }

  const result = new LList();
  result.head = tempNode.next;
  return result;
};

const list1 = arrToLList(arr1);
const list2 = arrToLList(arr2);

const answer = main(list1, list2);

console.log(LListToArr(answer));
