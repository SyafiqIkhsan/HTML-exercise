function cekHuruf() {
  let h = document.getElementById('huruf').value.toLowerCase();
  if (!h.match(/[a-z]/)) {
    document.getElementById('output').innerText = "Masukkan satu huruf alfabet!";
    return;
  }
  let vokal = 'aeiou'.includes(h);
  document.getElementById('output').innerText = h + " adalah huruf " + (vokal ? "vokal" : "konsonan");
}