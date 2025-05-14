const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next;
}

function listToArray(head) {
  const result = [];

  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

const l1 = arrayToList(arr1);
const l2 = arrayToList(arr2);

const main = (l1, l2) => {
  const dummy = new ListNode();

  let carry = 0;
  let cur = dummy;

  while (l1 || l2 || carry) {
    const s = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(s / 10);
    cur.next = new ListNode(s % 10);
    cur = cur.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return listToArray(dummy.next);
};

console.log(main(l1, l2));
