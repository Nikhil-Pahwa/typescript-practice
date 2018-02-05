class Flattening {
    private static result: Array<any> = [];
    public static flatArray(arr: Array<any>): Array<any> {
        for (let data of arr) {
            if (Array.isArray(data)) {
                Flattening.flatArray(data);
            } else {
                this.result.push(data);
            }
        }
        return this.result;
    }
}

const sampleArray = [1, 4, 5, [34, 51, 1, [45, 1, 56], 2, 91], 1];
const flattenedArray = Flattening.flatArray(sampleArray);
console.log(flattenedArray);