
// function isOdd(number){
//  return number % 2 !=0;
// }
// function isEven(number){
// return number % 2 ==0;


// }

// function filter(numberss,fn){
//     let result = [];
//     for(const number of numberss ){
//         if(fn(number)){
//         result.push(number);
//         }
//     }
//     return result;
// }


// let numberss = [ 35,67,23,22,12,46,4];

// console.log(filter(numberss,isOdd));
// console.log(filter(numberss,isEven));





function filter(numbers,callback){
    let result = [];
    for(const number of numbers){
        if(callback(number)){
            result.push(number);
        }
    }
    return result;

}
 let numbers =[46,35,66,22,67,11];
 let OddNumber= filter(numbers,(number)=> number % 2 ==0);
setTimeout(() => {
    console.log(OddNumber)
},3000);


