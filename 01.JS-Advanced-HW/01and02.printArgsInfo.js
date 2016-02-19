function printArgsInfo(){
    var arguments = printArgsInfo.arguments;
    console.log();
    //console.log(arguments);

    for (var element in arguments) {
        if (Array.isArray(arguments[element])){
            console.log(arguments[element] + " (array)")
        }
        else{
            console.log(arguments[element] + " (" + typeof(arguments[element]) + ")");
        }
    }
}

printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);

console.log("\ncall() func ->>");

printArgsInfo.call(null, 1, 2);
printArgsInfo.call(null, "string");

console.log("\napply() func ->>");

printArgsInfo.apply(null, [1,2,3]);
printArgsInfo.apply(null, [[1, 2]]);