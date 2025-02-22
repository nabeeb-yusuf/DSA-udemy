const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList/SinglyLinkedList.js');
describe('SinglyLinkedList', () => {

    test('It should create an empty list of length 0', () => {
        const list = new SinglyLinkedList();
        expect(list.length).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    test('pushing to an empty list should set length to 1 and head/tail to that value', () => {
        const list = new SinglyLinkedList();
        list.push(23);
        expect(list.head.val).toBe(23);
        expect(list.tail.val).toBe(23);
        expect(list.length).toBe(1);
    });

    test('pushing multiple times should increase the length and update the tail accordingly', () => {
        const list = new SinglyLinkedList();
        list.push(7);
        list.push('HELLO');
        list.push('GOODBYE');
        list.push('!');

        expect(list.length).toBe(4);
        expect(list.head.val).toBe(7);
        expect(list.head.next.val).toBe('HELLO');
        expect(list.tail.val).toEqual('!');
    })

    test('it should pop from the tail and update length/tail accordingly', () => {
        const list = new SinglyLinkedList();
        list.push(7);
        list.push('HELLO');
        list.push('GOODBYE');
        list.push('!');

        expect(list.pop().val).toEqual('!');
        expect(list.pop().val).toEqual('GOODBYE');
        expect(list.tail.val).toEqual('HELLO');
        expect(list.length).toBe(2);

    })

    test('it should update the head and tail to null after the last element is popped', () => {
        const list = new SinglyLinkedList();
        list.push('SOME VAL');
        list.pop();
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
        expect(list.length).toBe(0);
    })

    test('it should return undefined if popping an empty list', () => {
        const list = new SinglyLinkedList();
        expect(list.pop()).toBeUndefined();
    })

    test('it should return undefined if shifting empty list', () => {
        const list = new SinglyLinkedList();
        expect(list.shift()).toBeUndefined();
    })

    test('it should return the current head when shifting and update head/length', () => {
        const list = new SinglyLinkedList();
        list.push(7);
        list.push('HELLO');
        list.push('GOODBYE');
        list.push('!');
        expect(list.shift().val).toEqual(7);
        expect(list.head.val).toEqual('HELLO');
        expect(list.length).toEqual(3);
    })
})