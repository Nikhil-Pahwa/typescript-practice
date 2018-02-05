var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.isPalindrome = function (palindromeString) {
        var isPalindrome = true;
        palindromeString = palindromeString.split(' ').join('');
        for (var i = 0; i < Math.floor(palindromeString.length / 2); i++) {
            if (palindromeString.charAt(i) !== palindromeString.charAt(palindromeString.length - i - 1)) {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    };
    return StringUtils;
}());
var palindromeString = 'nurses run';
var resPalidrome = StringUtils.isPalindrome(palindromeString);
console.log(resPalidrome);
//# sourceMappingURL=palindrome.js.map