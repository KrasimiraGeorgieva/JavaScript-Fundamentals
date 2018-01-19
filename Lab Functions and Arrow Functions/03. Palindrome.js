function isPalindrome(string) {
    /*for (let i = 0; i < string.length / 2; i++) {

        if (string[i] != string[string.length - i - 1]) {
            return false;
        } else {
            return true;
        }
    }*/

    return string.split('')
        .reverse()
        .join("") === string;

}

console.log(isPalindrome('hadh'));