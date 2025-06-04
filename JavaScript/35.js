function konversiNilai() {
  let n = parseInt(document.getElementById('nilai').value);
  let grade = '';
  if (isNaN(n) || n < 0 || n > 100) {
    grade = "Nilai tidak valid!";
  } else if (n >= 85) {
    grade = "A";
  } else if (n >= 70) {
    grade = "B";
  } else if (n >= 55) {
    grade = "C";
  } else if (n >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  document.getElementById('output').innerText = `Nilai huruf: ${grade}`;
}