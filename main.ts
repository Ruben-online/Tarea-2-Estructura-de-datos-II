import { DoubleLinkedList } from "./double_linked_list";

// Datos
console.log("Ruben Espinoza - 1525620")

// Crear la lista
const nodelist = new DoubleLinkedList();

// Agregar valores a la lista
nodelist.add_to_end();
nodelist.add_to_end();
nodelist.add_to_end();
nodelist.add_to_end();
nodelist.add_to_end();

// Imprimir
console.log("Números pares en la lista: ")
nodelist.print_pair_numbers()