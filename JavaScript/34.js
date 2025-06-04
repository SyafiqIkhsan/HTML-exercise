function konversiMenit() {
  let totalMenit = parseInt(document.getElementById('menit').value);
  if (isNaN(totalMenit) || totalMenit < 0) {
    document.getElementById('output').innerText = "Masukkan angka menit yang valid!";
    return;
  }
  let jam = Math.floor(totalMenit / 60);
  let menit = totalMenit % 60;
  document.getElementById('output').innerText = `${totalMenit} menit = ${jam} jam ${menit} menit`;
}