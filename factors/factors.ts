class Utils {
    public static factors(no: number): Array<number> {
        let resultedArray: number[] = [];
        for (let i = 1; i < no; i++) {
            if (no % i == 0) {
                resultedArray.push(i);
            }
        }
        return resultedArray;
    }
}

const sampleNumber: number = 20;
const factorsno = Utils.factors(sampleNumber);
console.log(`factors of ${sampleNumber} are ${factorsno}`);
