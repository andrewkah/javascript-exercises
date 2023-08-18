const caesar = function(text, num) {
    let arr = [];
    for (let i = 0; i < text.length; i++) {
        if (!(/[a-zA-Z]/.test(text[i]))) {
            {arr[i]=text[i]; continue;}}
        let key = text.charCodeAt(i) + num;
        if (text[i] == text[i].toLowerCase()) {
            if (n>122) {
                while (n>122) {
                    {n -=26;}
                }
            } else{
                while (n<97) {
                    n+=26;
                }
            }
        } else{
            if (n>90) {
                n-=26;
            } else{
                while (n<65) {
                    n+=26;
                }
            }
            arr[i]= String.fromCharCode(n);
        }
        
    }
    return arr.join('');

};

// Do not edit below this line
module.exports = caesar;
