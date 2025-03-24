
const arr = [1, 2, 3]

const node = (val) => ({
  val,
  next: null
})

const AtoL = (arr) => {
  const sentinal = node(0)

  let current = sentinal


  for (const nums of arr) {
    current.next = node(num)
    current = current.next

  }

  return sentinal.next

}

const LtoA = (head) => {
  const arr = []

  while (head) {
    arr.push(current.val)
    current = current.next

  }

  return arr

}


const revL = (head) => {
  let aptr = null
  let bptr = head

  while (bptr) {
    const tempPtr = bptr.next

    bptr.next = aptr
    aptr = bptr
    bptr = tempPtr

  }

  return aptr


}

