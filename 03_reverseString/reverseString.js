const reverseString = function(string) {
    let stringArray = string.split('');

    let startIndex = 0, endIndex = stringArray.length - 1;

    if(string == '') return '';

    while(startIndex != endIndex){
        let temp = stringArray[startIndex];
        stringArray[startIndex] = stringArray[endIndex];
        stringArray[endIndex] = temp;
        startIndex++;
        endIndex--;
    }

    return stringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
