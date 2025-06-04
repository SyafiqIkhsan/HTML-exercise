function balik() {
  const kalimat = document.getElementById('kalimat').value;
  const hasil = kalimat.split('').reverse().join('');
  document.getElementById('output').innerText = `Hasil: ${hasil}`;
}