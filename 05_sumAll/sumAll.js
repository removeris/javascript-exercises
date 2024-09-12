const sumAll = function(start, finish) {

    if(start < 0 || finish < 0)
        return "ERROR";
    if(!Number.isInteger(start) || !Number.isInteger(finish))
        return "ERROR";

    if(start > finish){
        let temp = start;
        start = finish;
        finish = temp;
    }
    
    let sum = 0;
    
    for(; start <= finish; start++){
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
