const repeatString = function(repString, num) {
    if (num < 0) {
        return "ERROR";
    } else {
        let str = "";
    let i = 0;
    while (i < num) {
        str += repString;
        i++;
    }
    return str;
    }
};

// Do not edit below this line
module.exports = repeatString;
