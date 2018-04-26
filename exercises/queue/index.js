// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

  // array.unshift()
  // array.pop()

  // constructor
  constructor() {
    // gets called when we canm define a new queue (new)
    this.data = [];
  }

  add (record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length > 0;
  }

}

module.exports = Queue;
