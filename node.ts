export class Node {
    // Valor del nodo (Números entre 1 y 9)
    value: number;
    // Punteros
    next: Node | null;
    prev: Node | null;

    constructor() {
        // Genera un número aleatorio entre 1 y 9 
        this.value = Math.floor(Math.random() * 9) + 1;
        // Inicialmente no hay nodo siguiente ni nodo anterior
        this.next = null;
        this.prev = null;
    }
}