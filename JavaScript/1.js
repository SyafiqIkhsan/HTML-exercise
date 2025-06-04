function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function cariPrimaRange() {
  let n = parseInt(document.getElementById('limit').value);
  if (isNaN(n) || n < 2) {
    document.getElementById('hasil').innerText = "Masukkan angka ≥ 2!";
    return;
  }
  let result = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) result.push(i);
  }
  document.getElementById('hasil').innerText = `Bilangan prima dari 1 sampai ${n}: ${result.join(', ')}`;
}