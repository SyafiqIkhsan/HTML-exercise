function konversi() {
  let liter = parseFloat(document.getElementById('liter').value);
  let ml = liter * 1000;
  document.getElementById('output').innerText = `${liter} liter = ${ml} mililiter`;
}