function myfunc(input) {
  let output = [];
  for (let i of input) {
    if (output.indexOf(i) === -1) {
      output.push(i);
    }
  }
  return output;
}

console.log(myfunc([1, 2, 3, 4, 4, 5, 6, 5, 1]));
