// console.log("Hello World");
// console.log("Check push");
function myfunction(arr){
    arr.sort();
    let resultArr = [];
    let temp;
    for(let i=0; i< arr.length;i++ ){
        if(arr[i] !== temp){
            resultArr.push(arr[i]);
            temp = arr[i];
        }
      }
      return resultArr;
}
let myarr = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
console.log(myfunction(myarr));