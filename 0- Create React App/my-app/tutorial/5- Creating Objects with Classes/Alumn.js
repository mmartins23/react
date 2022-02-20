const Person = require('./Person');

class Alumn extends Person {

    constructor(name,age, grade) {
        super(name,age)
        this.grade = grade;
    }

    greetings() {
        console.log("Good afternoon, I am", this.name , "and my grade is:", this.grade);
    }
}

let ana = new Alumn("Ana", 19, 9);

ana.greetings();

module.exports = Alumn