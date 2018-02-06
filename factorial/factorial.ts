class FactorialUtil {
    public static getFactorial(no: number): number {
        let factorial: number = 1;
        for (let i = 2; i <= no; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}

const factorialSample = 5;
const factorialResult = FactorialUtil.getFactorial(factorialSample);
console.log(`Factorial of ${factorialSample} is ${factorialResult}`);

