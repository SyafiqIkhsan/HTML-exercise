function hitung() {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  let c = parseFloat(document.getElementById('c').value);
  let keliling = a + b + c;
  document.getElementById('output').innerText = `Keliling segitiga: ${keliling}`;
}