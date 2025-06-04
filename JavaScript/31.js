function jamKeDetik() {
  let jam = parseFloat(document.getElementById("jam").value);
  let detik = jam * 3600;
  document.getElementById("hasil").innerText = `${jam} jam = ${detik} detik`;
}