'use strict';

class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);
            if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    remove(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return {
                value: current.value,
                prev: current.prev ? { value: current.prev.value } : null,
                next: current.next ? { value: current.next.value } : null,
                };
            }
            current = current.next;
        }
        return null;
    }

    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}


const linkedList = new DoublyLinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log('Size:', linkedList.size);
console.log('Head:', linkedList.head.value);
console.log('Tail:', linkedList.tail.value);

console.log('Array representation:', linkedList.toArray());

linkedList.remove(2);

console.log('Size after removal:', linkedList.size);
console.log('Array representation after removal:', linkedList.toArray());

const searchResult = linkedList.search(1);
console.log('Search result:', searchResult);
