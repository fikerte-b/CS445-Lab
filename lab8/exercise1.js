isPrime = function(num){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
          for(let i = 2, s = Math.sqrt(num); i <= s; i++){
          if(num % i === 0)
           reject({prime: false});
          }
          resolve({prime: true});
        }, 500);
    });
  }
  
  async function isPrimeAsyncAwait(num){
      try{
        let result = await isPrime(num);
        console.log(result);
      }catch(error){
          console.log(error);
      }
  }
  console.log('start');
//   isPrime(7)
//       .then(res => console.log(res))
//       .catch(err => console.error(err));
  isPrimeAsyncAwait(7);
  console.log('end');
  
  // Output:
  // start
  // end
  // { prime: true }