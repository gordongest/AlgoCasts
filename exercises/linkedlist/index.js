// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  checkHead() {
    if (!this.head) {
      return;
    }
  }

  insertFirst(data) {
    // const node = new Node(data, this.head);
    // this.head = node;

    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // return this.head;

    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;

    // while (node.next) {
    //   node = node.next;
    // }

    // return node;

    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) {
    //   return;
    // }

    // this.head = this.head.next;

    this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) {
    //   return;
    // }

    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let prev = this.head;
    // let node = this.head.next;

    // while (node.next) {
    //   prev = node;
    //   node = node.next;
    // }

    // prev.next = null;

    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    // if (!this.head) {
    //   this.head = new Node(data);
    //   return;
    // }

    // const node = this.getLast();

    // node.next = new Node(data);

    this.insertAt(data, this.size());
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);
    /* this works, but less efficient because it requires an add'l loop */
    // const next = this.getAt(index + 1);

    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      const next = this.head;
      this.head = new Node(data, next);
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();

    /* inefficient? */
    // if (!prev) {
    //   this.insertLast(data);
    //   return;
    // }

    const next = prev.next;
    prev.next = new Node(data, next);
  }

  forEach(fn) {
    let node = this.head;
    // let counter = 0;

    while (node) {
      fn(node);
      node = node.next;
      // counter++;
    }
  }

  // generator function
  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      /* at each stop it returns the node */
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
