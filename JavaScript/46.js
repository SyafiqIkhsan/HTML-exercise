function tampilkanKelipatan() {
  const n = parseInt(document.getElementById('angka').value);
  let hasil = [];
  for (let i = 3; i <= n; i += 3) {
    hasil.push(i);
  }
  document.getElementById('output').innerText = `Kelipatan 3 hingga ${n}: ${hasil.join(', ')}`;
}