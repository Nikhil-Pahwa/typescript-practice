var NumberUtils = /** @class */ (function () {
    function NumberUtils() {
    }
    NumberUtils.isPrime = function (data) {
        var isPrime = true;
        for (var i = 2; i < data; i++) {
            if (data % i === 0) {
                isPrime = false;
            }
        }
        return isPrime;
    };
    return NumberUtils;
}());
var sampleUtilsData = 22;
var NumberUtilsResult = NumberUtils.isPrime(sampleUtilsData);
console.log(NumberUtilsResult);
//# sourceMappingURL=isPrime.js.map