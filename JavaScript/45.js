function tampilkanGenap() {
  let n = parseInt(document.getElementById('n').value);
  let hasil = [];
  for (let i = 2; i <= n; i += 2) {
    hasil.push(i);
  }
  document.getElementById('output').innerText = hasil.join(", ");
}