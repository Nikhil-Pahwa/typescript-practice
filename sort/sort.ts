class Sort {
    public static bubbleSort(unsortedList: number[]): Array<number> {
        let sortedList: number[];
        let done: boolean = false;
        while (!done) {
            done = true;
            for (let i = 0; i < unsortedList.length; i++) {
                if (unsortedList[i] > unsortedList[i + 1]) {
                    let temp = unsortedList[i];
                    unsortedList[i] = unsortedList[i + 1];
                    unsortedList[i + 1] = temp;
                    done = false;
                }
            }
        }
        sortedList = unsortedList;
        return sortedList;
    }
}

const bubbleSortSampleData = [2, 1, 6, 6, 5, 3];
const bubbleSortResult = Sort.bubbleSort(bubbleSortSampleData);
console.log(bubbleSortResult);
