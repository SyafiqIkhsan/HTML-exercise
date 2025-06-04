function hitungVolumeBola() {
  let r = parseFloat(document.getElementById('jari').value);
  if (isNaN(r) || r <= 0) {
    document.getElementById('output').innerText = "Masukkan jari-jari yang valid!";
    return;
  }
  let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
  document.getElementById('output').innerText = `Volume bola: ${volume.toFixed(2)}`;
}