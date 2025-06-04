function fibonacci(n) {
  const deret = [0, 1];
  for (let i = 2; i < n; i++) {
    deret.push(deret[i - 1] + deret[i - 2]);
  }
  return deret.slice(0, n);
}

function tampilkanFibonacci() {
  const jumlah = parseInt(document.getElementById('jumlah').value);
  const deret = fibonacci(jumlah);
  document.getElementById('output').innerText = `Deret Fibonacci: ${deret.join(', ')}`;
}