// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.a = new Stack();
    this.b = new Stack();
  }

  add(record) {
    this.a.push(record);
  }

  remove() {
    while (this.a.peek()) {
      this.b.push(this.a.pop());
    }

    const record = this.b.pop();

    while (this.b.peek()) {
      this.a.push(this.b.pop());
    }

    return record;
  }

  peek() {
    while (this.a.peek()) {
      this.b.push(this.a.pop());
    }

    const record = this.b.peek();

    while(this.b.peek()) {
      this.a.push(this.b.pop());
    }

    return record;
  }
}

module.exports = Queue;
