class NumberUtils {
    public static isPrime(data: number): Boolean {
        let isPrime = true;
        for (let i = 2; i < data; i++) {
            if (data % i === 0) {
                isPrime = false;
            }
        }
        return isPrime;
    }
}

let sampleUtilsData = 23;
let NumberUtilsResult = NumberUtils.isPrime(sampleUtilsData);
console.log(NumberUtilsResult);