var Flattening = /** @class */ (function () {
    function Flattening() {
    }
    Flattening.flatArray = function (arr) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var data = arr_1[_i];
            if (Array.isArray(data)) {
                Flattening.flatArray(data);
            }
            else {
                this.result.push(data);
            }
        }
        return this.result;
    };
    Flattening.result = [];
    return Flattening;
}());
var sampleArray = [1, 4, 5, [34, 51, 1, [45, 1, 56], 2, 91], 1];
var flattenedArray = Flattening.flatArray(sampleArray);
console.log(flattenedArray);
//# sourceMappingURL=arrayFlattening.js.map