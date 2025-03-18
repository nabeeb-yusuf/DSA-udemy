/**
 * Node class used in the SinglyLinkedList.
 * Contains value and pointer to the next node
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * SinglyLinkedList contains the pointers to the head and tail Nodes, and the length of the list.
 */
class SinglyLinkedList {
    constructor() {
        this.head = null; // Initialize to null for new list
        this.tail = null;
        this.length = 0;
    }

    /**
     * Adds a new node to the end of the list
     * @param val
     * @returns {SinglyLinkedList}
     */
    push(val) {
        let newNode = new Node(val);
        if (!this.head) { // If empty list, point the head and tail to the new node
            this.head = newNode;
            this.tail = this.head;
        } else { // Else set the new node to the next pointer of the tail node
            this.tail.next = newNode;
            this.tail = newNode; // Then change the tail pointer to the new node
        }
        this.length += 1; // Increment length by one after linking new Node
        return this; // Return the list
    }

    /**
     * Removes and returns the last node from the end of the list
     * @returns {undefined|Node}
     */
    pop() {
        if (!this.head) return undefined; // If list empty, return undefined

        let current = this.head; // current stores the last node
        let temp = current; // temp stores the node immediately before the last
        while (current.next) { // while current is still not the tail node
            temp = current;
            current = current.next; // change current to the next node
        }
        temp.next = null; // set the next (tail node) of temp to be null
        this.tail = temp; // point tail to the second last node (temp)
        this.length -= 1;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; // return current, the node at the end of the list we removed
    }

    /**
     * Removes and returns the first node from the start of the list
     * @returns {undefined|Node}
     */
    shift() {
        if (!this.head) return undefined; // If list empty, return undefined

        let temp = this.head; // store the current head in temp so that we can return it
        this.head = temp.next; // point the head to the node right after the first node
        this.length -= 1;

        if (this.length === 0) { // if list empty, set tail to null
            this.tail = null; // head will by default be null if temp.next is null
        }

        return temp; // return the head node we just removed
    }

    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) { // If empty list
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter += 1;
        }
        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;
        this.length += 1;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length -= 1;

        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    rotate(n) {
        let trueN = ((n % this.length) + this.length) % this.length;
        if (trueN === 0 || this.length < 2) return this;
        let count = 0;
        let cur = this.tail;
        this.tail.next = this.head;
        while (count < trueN) {
            cur = cur.next;
            count++;
        }
        this.tail = cur;
        this.head = cur.next;
        this.tail.next = null;
        return this;
    }
}

module.exports = SinglyLinkedList;