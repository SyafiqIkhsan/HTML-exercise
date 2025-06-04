function konversiDetik() {
  let totalDetik = parseInt(document.getElementById('detik').value);
  if (isNaN(totalDetik) || totalDetik < 0) {
    document.getElementById('output').innerText = "Masukkan detik yang valid!";
    return;
  }
  let jam = Math.floor(totalDetik / 3600);
  let menit = Math.floor((totalDetik % 3600) / 60);
  let detik = totalDetik % 60;
  document.getElementById('output').innerText = `${totalDetik} detik = ${jam} jam ${menit} menit ${detik} detik`;
}