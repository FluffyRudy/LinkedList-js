# LinkedList

This project is a simple implementation of a LinkedList in Node.js. It includes methods for common operations such as `append`, `prepend`, `size`, `head`, `tail`, `at`, `pop`, `find`, `contains`, `insertAt`, and `removeAt`.

This project is based on a task from The Odin Project, a free online curriculum for learning web development. [project](https://www.theodinproject.com/lessons/javascript-linked-lists)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.

## Usage

Here's an example of how to use the LinkedList class:

```javascript
const linkedlist = new LinkedList();
["Tigeral", "Ruby", "Brody", "Melissa", "Yin", "Martis", "Gusian"]
    .forEach(username => linkedlist.append(username)); //add elements to linked list

linkedlist.print(); //prints all data

linkedlist.prepend("Johnson"); //add element at first position
linkedlist.print();

linkedlist.append("Vexana"); //add element to last position
linkedlist.print();

linkedlist.pop(); //remove last element
linkedlist.print();

console.log(linkedlist.at(0)) //print Node at index 0
console.log(linkedlist.contains("Melissa")); //check if certain value exist or not
console.log(linkedlist.find("Melissa")); //return index of element if it element exists

linkedlist.insertAt("Odette", 4); //insert element at specific position || index 
linkedlist.print();
```