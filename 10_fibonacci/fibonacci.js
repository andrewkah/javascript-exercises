const fibonacci = function(num) {
    let arr = [0,1];
    if(num<0) return 'OOPS';
    if (num<=2) return 1;
    for (let i = 2; i <= num; i++) {
        arr[i] = arr[i-1] + arr[i-2];
        
    }
    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
