function myfunc(input) {
  product = 1;
  for (var i = 0; i < input.length; i++) {
    product *= input[i];
  }
  return product;
}

console.log(myfunc([1, 2, 3, 4]));
