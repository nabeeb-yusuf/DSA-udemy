class Node {
    constructor(n) {
        this.value = n;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        this.size += 1;
        return this.size;
    }

    pop() {
        if (!this.first) return undefined;

        let poppedNode = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = this.first;
        } else {
            this.first = poppedNode.next;
        }

        this.size -= 1;
        return poppedNode.value;
    }
}