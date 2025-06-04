function balikAngka() {
  let angka = document.getElementById('angka').value;
  let hasil = angka.split('').reverse().join('');
  document.getElementById('output').innerText = hasil;
}