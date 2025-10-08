var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "こんにちは！" + person.firstName + " " + person.lastName;
}
var user = new Student("山田", "名無し", "太郎");
document.body.textContent = greeter(user);
