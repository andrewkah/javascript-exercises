const palindromes = function (reverseString) {
    palin1 = reverseString.toLowerCase().replace(/[^a-z0-9]/g, "");
    palin2 = palin1.split('').reverse().join('');
    if (palin1 == palin2) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
