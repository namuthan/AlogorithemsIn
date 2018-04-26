// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint_Easy(list) {

  const size = list.size();
  const middleIndex = size % 2 == 0 ? (size / 2 - 1) : Math.floor(size / 2);

  return list.getAt(middleIndex);
}

// Another solution
function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;
