function hitungLuasLingkaran() {
  let d = parseFloat(document.getElementById('diameter').value);
  if (isNaN(d) || d <= 0) {
    document.getElementById('output').innerText = "Masukkan diameter yang valid!";
    return;
  }
  let r = d / 2;
  let luas = Math.PI * r * r;
  document.getElementById('output').innerText = `Luas lingkaran dengan diameter ${d} adalah ${luas.toFixed(2)}`;
}