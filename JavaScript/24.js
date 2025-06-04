function hitungVolumeKerucut() {
  let r = parseFloat(document.getElementById('jari').value);
  let t = parseFloat(document.getElementById('tinggi').value);
  if ([r,t].some(v => isNaN(v) || v <= 0)) {
    document.getElementById('output').innerText = "Masukkan nilai yang valid!";
    return;
  }
  let volume = (1/3) * Math.PI * r * r * t;
  document.getElementById('output').innerText = `Volume kerucut: ${volume.toFixed(2)}`;
}