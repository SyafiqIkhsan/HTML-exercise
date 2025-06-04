function hitungVolumeBalok() {
  let p = parseFloat(document.getElementById('panjang').value);
  let l = parseFloat(document.getElementById('lebar').value);
  let t = parseFloat(document.getElementById('tinggi').value);
  if ([p,l,t].some(v => isNaN(v) || v <= 0)) {
    document.getElementById('output').innerText = "Masukkan nilai yang valid!";
    return;
  }
  let volume = p * l * t;
  document.getElementById('output').innerText = `Volume balok: ${volume}`;
}