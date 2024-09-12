const removeFromArray = function(numArray, ...numbers) {
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numArray.length; j++){
            if(numArray[j] == numbers[i] && typeof(numbers[i]) == typeof(numArray[j])){
                numArray.splice(j, 1);
                j--;
            }
        }
    }
    return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;
