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
            this.length += 1;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length += 1;
        }

        return this;
    }
}

module.exports = SinglyLinkedList;