var Person = (function(){
    function Person(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    return Person;
})();

Person.prototype.toString = function(){
    return this._firstName + " " + this._lastName;
}
Person.prototype.getFirstName = function(){
    return this._firstName;
}

Person.prototype.getLastName = function(){
    return this._lastName;
}

var pesho = new Person("Petar", "Petrov");
console.log(pesho.toString());
console.log(pesho.getFirstName());
console.log(pesho.getLastName());