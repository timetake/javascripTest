class Counter {
  constructor(startingCount) {
    this.startingCount = startingCount;
    this.count = this.startingCount;
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }

  reset() {
    this.count = this.startingCount;
  }

  getCount() {
    return this.count;
  }
}

var test1 = new Counter(100);

test1.increment();
test1.increment();
test1.increment();
test1.decrement();
console.log(test1.getCount());

test1.reset();

console.log(test1.getCount());
