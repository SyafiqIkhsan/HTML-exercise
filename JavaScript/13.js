function hitungKeliling() {
  let s1 = parseFloat(document.getElementById('sisi1').value);
  let s2 = parseFloat(document.getElementById('sisi2').value);
  let s3 = parseFloat(document.getElementById('sisi3').value);
  if ([s1,s2,s3].some(v => isNaN(v) || v <= 0)) {
    document.getElementById('output').innerText = "Masukkan sisi yang valid dan > 0!";
    return;
  }
  let keliling = s1 + s2 + s3;
  document.getElementById('output').innerText = `Keliling segitiga: ${keliling}`;
}