var arr = [1, 3, 2, 6, 8, 10];
var total = 0;
for (var i = 0; i < arr.length; i++) {
    total = total + arr[i];
}
var avg = total / arr.length
console.log(avg)