let pile = new Stack();
let book = new Dictionary();
let chain = new LinkedList();
let ledger = new HashTable();
let link = new DoubleLinkedList();


pile.push("Bob");
pile.push("Sue");
console.log(pile);
pile.clear();

console.log(pile);

chain.add("potato", 1);

console.log(chain.print());

console.log(chain.isEmpty());

ledger.put(2);
ledger.put(4);
ledger.put(5);

console.log(ledger);

let list = [4, 5, 1, 6 , 3, 2, 15, 11, 10, 8, 7, 9, 10, 14, 12, 13];

console.log(ledger.generateStudentData(list));

