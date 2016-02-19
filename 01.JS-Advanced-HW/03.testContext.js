console.log("принтираме обекта this от Global scope\n");
function singleFunction(){
    console.log(this);
    //print the global scope
}

function outterFuncion(){
    function insideFunction(){
        console.log(this);
        //"this" will be the global context, unless called from another object
    }
    insideFunction();
}
console.log("отново се принтира глобалният обект");
outterFuncion();


console.log("\nсега ще принтираме, като присвоим функцията към променлива");
//the value of this within the scope of the function will be set to the newly created instance
//scope is within the var printGlobalObject!
var printGlobalObject = new singleFunction();