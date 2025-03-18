class Node {
    constructor(n) {
        this.value = n;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    enqueue(val) {
        let node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = this.first;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size += 1;
        return this.size;
    }

    dequeue() {
        if (!this.first) return null;

        let removedNode = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = this.first;
        } else {
            this.first = removedNode.next;
        }

        this.size -= 1;
        return removedNode.value;
    }
}

let q =  new Queue();
console.log(q.enqueue("im first"));
console.log(q.enqueue("second second"));

console.log(q);