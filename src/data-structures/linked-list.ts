class LinkedListNode {
    data: number;
    next: LinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
};

class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData: number): void {
        const node = new LinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail!.next = node;
        }

        this.tail = node;
    }
};

export { LinkedListNode, LinkedList }