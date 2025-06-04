function hitung() {
  let d1 = parseFloat(document.getElementById('d1').value);
  let d2 = parseFloat(document.getElementById('d2').value);
  let luas = 0.5 * d1 * d2;
  document.getElementById('output').innerText = `Luas belah ketupat: ${luas}`;
}