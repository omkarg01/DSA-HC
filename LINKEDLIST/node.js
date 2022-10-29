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
ll.insertAtStart(10)
ll.insertAtStart(20)
ll.insertAtStart(30)
ll.display()