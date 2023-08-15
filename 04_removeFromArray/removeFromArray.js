const removeFromArray = function(revArr, ...otherArgs) {
    newArr = [];
    revArr.filter(function sort(value) {
        if(!otherArgs.includes(value)){
            newArr.push(value);
        }
    })
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
