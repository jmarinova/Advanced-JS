String.prototype.startsWith = function(substring){
    var length = substring.length;

    if(this.length < length){
        throw new Error("Start-Substring is longer than the initial string.");
    }

    if (this.substr(0,length) === substring){
        return true;
    }

    return false;
}

String.prototype.endsWith = function(substring){
    var substringLength = substring.length,
        stringLength = this.length,
        currrentSelection,
        start,
        end;

    if(stringLength < substringLength){
        throw new Error("End-Substring is longer than the initial string.");
    }

    start = (stringLength - substringLength);
    end = substringLength;
    currrentSelection = this.substr(start, end);

    if (currrentSelection === substring){
        return true;
    }

    return false;
}

String.prototype.left = function(count){
    var stringLength = this.length;

    if (stringLength <= count){
        return this;
    }
    else{
        return this.substr(0,count);
    }
}

String.prototype.right = function(count){
    var stringLength = this.length;

    if (stringLength <= count){
        return this;
    }
    else{
        return this.substr(count - 1, stringLength);
    }
}

String.prototype.padLeft = function (count, character) {
    var newString = this,
        firstSubString;

    if (typeof character === 'undefined'){
        return newString;
    }else {
        firstSubString = character;

        for (var i = 0; i < count - 1; i++) {
            firstSubString += character;
        }

        newString = firstSubString + this;
    }

    return newString;
}

String.prototype.repeat = function (count) {
    var newString = this;

    for (var i = 0; i < count - 1; i++) {
        newString += this;
    }

    return newString;
}

String.prototype.padRight = function (count, character) {
    var newString = this;

    if (typeof character === 'undefined'){
        character = "";
        newString += character;
    }else {
        for (var i = 0; i < count; i++) {
            newString += character;
        }
    }

    return newString;
}

String.prototype.repeat = function (count) {
    var newString = this;

    for (var i = 0; i < count - 1; i++) {
        newString += this;
    }

    return newString;
}

var string= "Lorna";
console.log(string.startsWith("Lo"));
console.log(string.endsWith("rna"));
console.log(string.left(2));
console.log(string.right(3));
console.log(string.padLeft(2, "+"));
console.log(string.padRight(2, "*"));
console.log(string.repeat(2));