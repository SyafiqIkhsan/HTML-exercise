function konversiDetik() {
  let total = parseInt(document.getElementById("detik").value);
  let menit = Math.floor(total / 60);
  let sisa = total % 60;
  document.getElementById("hasil").innerText = `${menit} menit ${sisa} detik`;
}