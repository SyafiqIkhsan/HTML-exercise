function hitungSisaBagi() {
  let a = parseInt(document.getElementById('a').value);
  let b = parseInt(document.getElementById('b').value);
  if (isNaN(a) || isNaN(b) || b === 0) {
    document.getElementById('output').innerText = "Masukkan nilai yang valid!";
    return;
  }
  let sisa = a % b;
  document.getElementById('output').innerText = `Sisa dari ${a} ÷ ${b} = ${sisa}`;
}