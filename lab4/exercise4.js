//changing this using memoization
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacciMemo(n){
    let memoValue = {};
    let value;
    return function f(n){
        
        if(n in memoValue){
        value = memoValue[n];
       }else if(n <= 1 ){
           value = n;
       }else{
           value = f(n-1) + f(n-2);
           memoValue[n] = value;
       }
       return value;
    };
}


console.time("fibbonacci");
console.log(fibonacci(30));
console.timeEnd("fibbonacci");
console.time("fibonacciMemo");
let result = fibonacciMemo();
console.log(result(30));
console.timeEnd("fibonacciMemo");
let fikirte = fibonacciMemo();


