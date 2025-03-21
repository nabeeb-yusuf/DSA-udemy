class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);

        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length -= 1;
        return poppedNode;
    }

    shift() {
        if (!this.head) return undefined;

        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length -= 1;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length += 1;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current, count;

        if (index <= this.length/2) {
            current = this.head;
            count = 0;
            while (count !== index) {
                current = current.next;
                count += 1;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (count !== index) {
                current = current.prev;
                count -= 1;
            }
        }
        return current;
    }

    set(index, val) {
        let node = this.get(index);

        if (node !== null) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        afterNode.prev = newNode, newNode.next = afterNode;
        this.length += 1;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        removedNode.next = null, removedNode.prev = null;
        this.length -= 1;
        return removedNode;
    }
}