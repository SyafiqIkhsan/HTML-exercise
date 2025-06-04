function balikKata() {
  const kata = document.getElementById('kata').value;
  const hasil = kata.split('').reverse().join('');
  document.getElementById('output').innerText = `Kebalikan dari ${kata} adalah ${hasil}`;
}