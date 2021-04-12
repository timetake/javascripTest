function myfunc(arr, num) {
  var newArray = [];
  for (var i = 0; i <= num; i++) {
    if (i != num) {
      newArray.push(arr[i]);
    }
  }
  return (output = "Index of " + num + " " + "is " + (newArray.length - 1));
}

console.log(myfunc([1, 2, 3, 4, 5, 6], 5));
