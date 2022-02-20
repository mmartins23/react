const Person = require('./Person');
const Alumn = require('./Alumn');




let pedro = new Person("Pedro", 22);
let maria = new Person("maria", 15);

pedro.greetings();
maria.greetings();

let ana = new Alumn("Ana", 19, 9);

ana.greetings();