const sumAll = function(first, last) {
    sumVar = 0;
    if (!(Number.isInteger(first) && Number.isInteger(last) && first >0 && last > 0)) {
        return 'ERROR';
    }
    if (first > last) {
        a=0;
        a = first;
        first = last;
        last = a;
    }
    for (let index = first; index <= last; index++) {
        sumVar += index;        
    }
    return sumVar;
    
};

// Do not edit below this line
module.exports = sumAll;
