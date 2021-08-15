var sum = 0;
function fibonacci(number) {
    var a = 0;
    var b = 1;
    var c;
    for (var i = 0; i < number; i++) {
        c = a + b;
        a = b;
        b = c;
        sum += a;
    }
    return sum;
}
console.log(fibonacci(6));
