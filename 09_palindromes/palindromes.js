const palindromes = function (string) {
    let initialString = Array.from(string.toLowerCase());

    let startIndex = 0;
    let endIndex = initialString.length - 1;

    const reversedString = initialString.filter((char) => {
        if(char == '3') console.log(typeof(char));
        return (char.toUpperCase() != char.toLowerCase() || (char >= '0' && char <= '9'));
    })

    const finalArgString = reversedString.join("");

    while(startIndex < endIndex){
        let temp = reversedString[startIndex];
        reversedString[startIndex] = reversedString[endIndex];
        reversedString[endIndex] = temp;
        
        startIndex++;
        endIndex--;
    }

    const finalString = reversedString.join("");

    console.log(`Initial - ${string}, ${finalString} and ${finalArgString}`);

    if(finalArgString == finalString){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
