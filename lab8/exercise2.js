Array.prototype.removeDuplicatesAsync = async function(){
    let arr = this;
    let result = await new Promise(function(resolve, reject){
     // resolve([... new Set(arr)]);
     arr.sort();
     let resultArr = [];
     let temp;
     for(let i=0; i< arr.length;i++ ){
         if(arr[i] !== temp){
             resultArr.push(arr[i]);
             temp = arr[i];
         }
       }
       resolve(resultArr);
    })
    //.then((result)=> console.log(result));
    console.log(result);
};



console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);