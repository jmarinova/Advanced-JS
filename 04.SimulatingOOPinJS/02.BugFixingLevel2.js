var Person = (function(){
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        Object.defineProperty(this, "fullName", {
            get : function(){
                return this.firstName + " " + this.lastName;
            },
            set : function(name){
                var names = name.split(" ");
                this.firstName = names[0];
                this.lastName = names[1];
            }
        })
    }

    return Person;
})();

Person.prototype.toString = function(){
    return this.firstName + " " + this.lastName;
}

var pesho = new Person("Petar", "Petrov");
console.log(pesho.toString());
console.log(pesho.firstName);
pesho.fullName = "Milko Milchev";
console.log(pesho.fullName);
console.log(pesho.lastName);