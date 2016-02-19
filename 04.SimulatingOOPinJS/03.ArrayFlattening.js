var outputArray = [];

Array.prototype.flatten = function (){

    function getValues(array){
        var i;
        for (i = 0; i < array.length; i += 1){
            var value = array[i];

            if (Array.isArray(value)){
                getValues(value);
            }
            else{
                outputArray.push(value);
            }
        }
    }

    getValues(this);
    return outputArray;
}

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());

