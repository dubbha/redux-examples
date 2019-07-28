export const someExpensiveComputation = number => {
  const fib = n => (n === 0 || n === 1) ? 1 : fib(n - 2) + fib(n - 1);

  console.log('computing...');
  const startTime = performance.now();
  const result = fib(Number(number));
  console.log(`done, it's ${result}, took ${Math.floor(performance.now() - startTime)} ms`);

  return result;
}

export const fetchUser = uid =>
  fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
    .then(response => response.json());
