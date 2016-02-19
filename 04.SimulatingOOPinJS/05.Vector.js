var Vector = (function (dimensions) {
    function Vector(dimensions) {
        if(!dimensions || !Array.isArray(dimensions) || dimensions.length === 0){
            throw new Error("Any vector should have at least one dimension!");
        }

        this._dimensions = dimensions
    }

    Vector.prototype.add = function (other) {
        var currentVectorLength,
            resultDimensions = [],
            i;
        if (!(other instanceof Vector)){
            throw new Error("One vector should only be added to another!");
        }

        currentVectorLength = this._dimensions.length;
        if (currentVectorLength !== other._dimensions.length){
            throw new Error("Both vectors should have equal dimensions in order to add!");
        }

        for (i = 0; i < currentVectorLength; i++) {
            var value = this._dimensions[i] + other._dimensions[i];
            resultDimensions.push(value);
        }

        return new Vector(resultDimensions);
    }

    Vector.prototype.subtract = function (other) {
        var currentVectorLength,
            resultDimensions = [],
            i;
        if (!(other instanceof Vector)){
            throw new Error("One vector should only be subtracted from another!");
        }

        currentVectorLength = this._dimensions.length;
        if (currentVectorLength !== other._dimensions.length){
            throw new Error("Both vectors should have equal dimensions in order to subtract!");
        }

        for (i = 0; i < currentVectorLength; i++) {
            var value = this._dimensions[i] - other._dimensions[i];
            resultDimensions.push(value);
        }

        return new Vector(resultDimensions);
    }

    Vector.prototype.dot = function (other) {
        var currentVectorLength,
            resultDimensions = [],
            i;

        if (!(other instanceof Vector)){
            throw new Error("One vector should only be subtracted from another!");
        }

        currentVectorLength = this._dimensions.length;

        if (currentVectorLength !== other._dimensions.length){
            throw new Error("Both vectors should have equal dimensions in order to subtract!");
        }

        for (i = 0; i < currentVectorLength; i++) {
            var value = this._dimensions[i] * other._dimensions[i];
            resultDimensions.push(value);
        }

        return new Vector(resultDimensions);
    }

    Vector.prototype.norm = function(){
        var norm,
            vectorNumbers = 0;

        for (var i = 0; i < this._dimensions.length; i++) {
            vectorNumbers += Math.pow(this._dimensions[i], 2);
        }

        norm = Math.sqrt(vectorNumbers);

        return norm;
    }

    Vector.prototype.toString = function () {
        var result = "(" + this._dimensions.join(", ") + ")";

        return result;
    }

    return Vector;
})();


var a = new Vector([1, 2, 3]);
var b = new Vector([1, 2, 3]);
var resultAdding = a.add(b);
console.log(resultAdding.toString());
var resultSubrtact = a.subtract(b);
console.log(resultSubrtact.toString());
var resultDot = a.dot(b);
console.log(resultDot.toString());
console.log(a.norm());

