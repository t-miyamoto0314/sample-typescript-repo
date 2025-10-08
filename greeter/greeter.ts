class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "こんにちは！" + person.firstName + " " + person.lastName;
}

let user = new Student("山田", "名無し", "太郎");

document.body.textContent = greeter(user);