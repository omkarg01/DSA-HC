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

    delete(pos) {
        let temp = this.head;
        if (pos === 1){
            this.head = temp.next;
            return;
        }

        while (pos - 2 > 0) {
            temp = temp.next;
            pos -= 1;
        }

        let newNext = temp.next.next;
        temp.next.next = null;
        temp.next = newNext;
    }

    mergeLL(head1, head2) {

        let temp = null;
        if (head1 === null) {
            return head2;
        }
        if (head2 === null) {
            return head1;
        }

        if (head1.data <= head2.data) {
            temp = head1;
            temp.next = this.mergeLL(head1.next, head2)
        } else {
            temp = head2;
            temp.next = this.mergeLL(head1, head2.next)
        }

        return temp;
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

const list1 = new LinkedList();
list1.insertAtEnd(10)
list1.insertAtEnd(20)
list1.insertAtEnd(30)
list1.insertAtEnd(40)
list1.insertAtEnd(50)
list1.display()

const list2 = new LinkedList();
list2.insertAtEnd(11)
list2.insertAtEnd(22)
list2.insertAtEnd(33)
list2.insertAtEnd(44)
list2.insertAtEnd(55)
// list2.display()

const list3 = new LinkedList()
// list3.head = list3.mergeLL(list1.head, list2.head)
// list3.display()

list1.delete(2)
list1.display()