import { ArrayUtils } from '../remove-duplicate/removeDuplicate';

class UniqueArrayUtils {
    static removeDuplication(arr1: string[] | number[]): string[] | number[] {
        let resultedArray: number[] | string[] = [];
        resultedArray = ArrayUtils.removeDuplicate(arr1);
        return resultedArray;
    }
}

const sampleArr1: string[] | number[] = [2, 3, 5, 1, 3, 5];
const sampleArr2: string[] | number[] = [4, 2, 1, 7, 9];

const uniqueArrayResult: number[] | string[] = UniqueArrayUtils.removeDuplication(sampleArr1.concat(sampleArr2));
console.log(`Unique array of ${sampleArr1} and ${sampleArr2} is ${uniqueArrayResult}`);

