class WordUtils {
    public static mostOccuredWord(sentence: string[]): string {
        let word: string = '';
        let obj: any = {};
        sentence.forEach(wd => {
            let count: number = 0;
            for (let i = 0; i < sentence.length; i++) {
                if (sentence[i] === wd) count++;
            }
            obj[count] = wd;
        });


        return WordUtils.maxValueWord(obj);
    }

    private static maxValueWord(obj: any): string {
        let array: number[] = [];
        Object.keys(obj).map((value) => {
            array.push(parseInt(value));
        });
        return obj[Math.max(...array)];
    }
}

const sampleSentence = 'what do you do';
const mostOccuredWord = WordUtils.mostOccuredWord(sampleSentence.split(' '));
console.log(`Most occured word in the statement: ${sampleSentence} is ${mostOccuredWord}`);
