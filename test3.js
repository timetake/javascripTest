const arr = [1,2,3,4,5,6]
const num = 4



var newArray = [];
for (var i=0; i<=num; i++) {
    if (i != num) {
        newArray.push(arr[i]);}
}

var output= "Index of "+num+" "+"is "+(newArray.length-1);

console.log(output);
