class ArrayUtils {
    private static result: Array<any> = [];

    public static removeDuplicate(arr: Array<any>): Array<any> {

        if (typeof arr[0] === 'number') {
            arr = arr.sort();
        }

        for (let i = 0; i < arr.length; i++) {
            let isUnique = this.isUnique(arr[i]);
            if (isUnique) this.result.push(arr[i]);
        }

        return this.result;
    }

    private static isUnique(val: string | number) {
        for (let data of this.result) {
            if (val === data) {
                return false; // Value alreay exist
            }
        }
        return true; // Value don't exist
    }
}

let sampleData: number[] = [1, 3, 5, 6, 1, 3, 4, 6];
const result = ArrayUtils.removeDuplicate(sampleData);
console.log(result);

export { ArrayUtils };