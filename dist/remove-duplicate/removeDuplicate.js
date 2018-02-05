var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.removeDuplicate = function (arr) {
        if (typeof arr[0] === 'number') {
            arr = arr.sort();
        }
        for (var i = 0; i < arr.length; i++) {
            var isUnique = this.isUnique(arr[i]);
            if (isUnique)
                this.result.push(arr[i]);
        }
        return this.result;
    };
    ArrayUtils.isUnique = function (val) {
        for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
            var data = _a[_i];
            if (val === data) {
                return false; // Value alreay exist
            }
        }
        return true; // Value don't exist
    };
    ArrayUtils.result = [];
    return ArrayUtils;
}());
var sampleData = [1, 3, 5, 6, 1, 3, 4, 6];
var result = ArrayUtils.removeDuplicate(sampleData);
console.log(result);
//# sourceMappingURL=removeDuplicate.js.map