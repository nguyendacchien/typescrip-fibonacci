let sum = 0;
function fibonacci(number:number){
    let a =0;
    let b=1;
    let c;
    for (let i = 0;i<number;i++){
        c = a+b;
        a = b;
        b = c;
        sum+=a
    }
    return sum
}
console.log(fibonacci(6));
