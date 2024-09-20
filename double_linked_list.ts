import { Node } from "./node";

export class DoubleLinkedList {
    head: Node | null;
    tail: Node | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public add_to_end(): void {
        // Crea un nuevo nodo
        const newNode = new Node();
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    public print_pair_numbers(): void {
        let currentNode = this.head;
        while (currentNode != null) {
            // Solo va imprimir si el valor es par
            if (currentNode.value % 2 === 0) {
                console.log(currentNode.value)
            }
            currentNode = currentNode.next
        }
    }
}