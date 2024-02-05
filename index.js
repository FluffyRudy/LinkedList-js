/**
 * Class representing a Node.
 *
 * @class
 */
class Node {
    /**
     * Create a node.
     * @param {any} value - The value to be stored in the node.
     */
    constructor(value) {
        this.value = value;
        this.next  = null;
    }

    /**
     * Convert the node to a string.
     * @returns {string} A string representation of the node.
     */
    toString() {
        return `Node { value: ${this.value}, next: ${this.next ? this.next.value : 'null'} }`;
    }
}

/**
 * Class representing a LinkedList.
 *
 * @class
 */
class LinkedList {
    #_head = null;
    #_tail = null;
    #_size = 0;

    /**
     * Append an element to the end of the linked list.
     * @param {any} element - The element to append.
     */
    append(element) {
        const temp = new Node(element);
        if (this.#_head !== null) {
            this.#_tail.next = temp;
            this.#_tail = temp;
        } else {
            this.#_head = this.#_tail = temp;
        }
        this.#_size++;
    }

    /**
     * Prepend an element to the start of the linked list.
     * @param {any} element - The element to prepend.
     */
    prepend(element) {
        const temp = new Node(element);
        if (this.#_head !== null) {
            temp.next = this.#_head;
            this.#_head = temp;
        } else {
            this.#_head = this.#_tail = temp;
        }
        this.#_size++;
    }

    /**
     * Get the size of the linked list.
     * @returns {number} The size of the linked list.
     */
    size() {
        return this.#_size;
    }

    /**
     * Get the head of the linked list.
     * @returns {Node} The head of the linked list.
     */
    head() {
        return this.#_head;
    }

    /**
     * Get the tail of the linked list.
     * @returns {Node} The tail of the linked list.
     */
    tail() {
        return this.#_tail;
    }

    /**
     * Get the node at a specific index in the linked list.
     * @param {number} index - The index of the node.
     * @returns {Node} The node at the specified index.
     * @throws {Error} If the index is out of range.
     */
    at(index) {
        if (index < 0 || index >= this.#_size)
            throw Error("IndexError: index out of range");
        let temp = this.#_head;
        let localIndex = 0;
        while (temp !== null) {
            if (localIndex === index)
                return temp;
            localIndex++;
            temp = temp.next;
        }
    }

    /**
     * Remove the last element from the linked list.
     * @throws {Error} If the list is empty.
     */
    pop() {
        if (this.#_size === 0)
            throw Error("IndexError: pop from empty list");
        if (this.#_size === 1) {
            this.#_head = null;
            this.#_tail = null;
        } else {
            let temp = this.#_head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            temp.next = null;
            this.#_tail = temp;
        }
        this.#_size--;
    }

    /**
     * Find the index of a value in the linked list.
     * @param {any} value - The value to find.
     * @returns {number|null} The index of the value or null if not found.
     */
    find(value) {
        let temp = this.#_head;
        let i = 0;
        while (temp != null) {
            if (temp.value === value)
                return i;
            i++;
            temp = temp.next;
        }
        return null;
    }

    /**
     * Check if the linked list contains a value.
     * @param {any} value - The value to check.
     * @returns {boolean} True if the value is found, false otherwise.
     */
    contains(value) {
        return this.find(value) === null ? false : true;
    }

    /**
     * Print the linked list.
     * @returns {string} A string representation of the linked list.
     */
    print() {
        let temp = this.#_head;
        let result = "";
        while (temp !== null) {
          result += temp+"\n";
          temp = temp.next;
        }
        return  `size: ${this.size()}\n` +
                `tail: ${this.tail()}\n\n`+
                result;
    }
}

const linkedlist = new LinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(5);
linkedlist.append(100);
console.log(linkedlist.find(5));
console.log(linkedlist.print())