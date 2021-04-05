
function myfunc(input){
sum = 0
for (var i=0; i<input.length; i++) {
    sum += input[i];
}
return sum
}

console.log(myfunc([1,2,3,4,5,7]))