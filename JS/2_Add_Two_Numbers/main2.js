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

  fromArr(arr) {
    const dummy = new Node(0);
    let current = dummy;

    for (let num of arr) {
      current.next = new Node(num);
      current = current.next;
    }

    this.head = dummy.next;
    return this;
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }

  static addTwoLinkedLists(firstList, secondList) {
    const dummy = new Node(0);
    let carry = 0;
    let current = dummy;

    let firstListPtr = firstList.head;
    let secondListPtr = secondList.head;

    while (firstListPtr || secondListPtr || carry) {
      const firstDigit = firstListPtr?.val ?? 0;
      const secondDigit = secondListPtr?.val ?? 0;
      const sum = firstDigit + secondDigit + carry;

      carry = Math.floor(sum / 10);
      current.next = new Node(sum % 10);

      current = current.next;

      firstListPtr = firstListPtr?.next ?? null;
      secondListPtr = secondListPtr?.next ?? null;
    }

    const result = new LinkedList();
    result.head = dummy.next;
    return result;
  }
}

const list1 = new LinkedList().fromArr(arr1);
const list2 = new LinkedList().fromArr(arr2);

const sumList = LinkedList.addTwoLinkedLists(list1, list2);
console.log(sumList.toArray());
