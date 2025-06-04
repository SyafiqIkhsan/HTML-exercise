function hitungLuasPermukaanKerucut() {
  let r = parseFloat(document.getElementById('jari').value);
  let s = parseFloat(document.getElementById('selimut').value);
  if (isNaN(r) || isNaN(s) || r <= 0 || s <= 0) {
    document.getElementById('output').innerText = "Masukkan nilai yang valid!";
    return;
  }
  let luas = Math.PI * r * (r + s);
  document.getElementById('output').innerText = `Luas permukaan kerucut: ${luas.toFixed(2)}`;
}