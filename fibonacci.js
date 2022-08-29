const fibonacci = (maxim) => {
  let stop = false;

  let first = 1;
  let second = 2;
  let fibo = first + second;
  let result = 2;

  while (!stop) {
    first = second;
    second = fibo;
    fibo = first + second;
    if (fibo % 2 === 0) {
      result += fibo;
    }
    if (result >= maxim) {
      stop = true;
      return result;
    }
  }
};
const result = fibonacci(4000000);
console.log(result);
