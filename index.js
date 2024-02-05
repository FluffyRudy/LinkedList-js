class Node {
    constructor(value) {
        this.value = value;
        this.next  = null;
    }

    toString() {
        return `Node { value: ${this.value}, next: ${this.next ? this.next.value : 'null'} }`;
    }
}

class LinkedList {
    #_head = null;
    #_tail = null;
    #_size = 0;
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

    size() {
        return this.#_size;
    }
    head() {
        return this.#_head;
    }
    tail() {
        return this.#_tail;
    }
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

    contains(value) {
        return this.find(value) === null ? false : true;
    }

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