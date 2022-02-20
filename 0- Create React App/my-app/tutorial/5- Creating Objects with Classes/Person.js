class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log("Good afternoon, I am", this.name);
    }
}

module.exports = Person