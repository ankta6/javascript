var arr =  [1,4,2,6,23];
var str = [12,45,34]
var mg = [];
 for(var i= 0; i<arr.length;i++){
    mg[i] = arr[i];
 }
 for(var i =0;i<str.length;i++){
    mg[arr.length+i] = str[i];
 }
 console.log(mg);