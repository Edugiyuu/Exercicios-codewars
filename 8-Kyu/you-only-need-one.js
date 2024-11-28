/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/
var check = function (a, x) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
};
console.log(check([2, 3, 5], 5));
