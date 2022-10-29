class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    insertAtStart(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        this.head = newNode;
        newNode.next = temp;
    }

    display() {
        let temp = this.head;

        if (temp === null) {
            console.log("insert element in the linkedlist")
        }

        let ll = "";
        while (temp) {
            ll += temp.data + " -> "
            temp = temp.next;
        }
        console.log(ll)
    }
}

const ll = new LinkedList();
ll.insertAtEnd(10)
ll.insertAtEnd(20)
ll.insertAtEnd(30)
ll.display()