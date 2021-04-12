function myfunc(input) {
  var year = [];
  for (var i = input[0]; i <= input[1]; i++) {
    year.push(i);
  }

  var leapYear = [];

  for (let i of year) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0))
      leapYear.push(i);
  }
  return leapYear;
}

console.log(myfunc([1800, 2000]));
