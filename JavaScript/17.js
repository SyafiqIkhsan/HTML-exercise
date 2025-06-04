function hitungLuasPermukaanBola() {
  let r = parseFloat(document.getElementById('jari').value);
  if (isNaN(r) || r <= 0) {
    document.getElementById('output').innerText = "Masukkan jari-jari yang valid!";
    return;
  }
  let luas = 4 * Math.PI * r * r;
  document.getElementById('output').innerText = `Luas permukaan bola: ${luas.toFixed(2)}`;
}