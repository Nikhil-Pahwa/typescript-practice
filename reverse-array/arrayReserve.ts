class ArrayReserveUtils {
    public static reverse(array: number[] | string[]): number[] | string[] {
        //let reversedResult: number[] | string[];
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            let temp = array[i];
            array[i] = array[array.length - i - 1];
            array[array.length - i - 1] = temp;
        }
        return array;
    }
}

const arrayReverveSample: number[] = [3, 4, 5, 1, 9, 7];
const arrayReverseResult = ArrayReserveUtils.reverse(arrayReverveSample);
console.log(`The reverse of data ${arrayReverveSample} is ${arrayReverseResult}`);
