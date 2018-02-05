class StringUtils {
    public static isPalindrome(palindromeString: string): boolean {
        let isPalindrome = true;
        palindromeString = palindromeString.split(' ').join(''); // Remove the white space.
        for (let i = 0; i < Math.floor(palindromeString.length / 2); i++) {
            if (palindromeString.charAt(i) !== palindromeString.charAt(palindromeString.length - i - 1)) {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    }
}

const palindromeString = 'nurses run';
const resPalidrome = StringUtils.isPalindrome(palindromeString);
console.log(resPalidrome);

