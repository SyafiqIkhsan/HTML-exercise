function luasTrapesium() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let t = parseFloat(document.getElementById("t").value);
  let luas = 0.5 * (a + b) * t;
  document.getElementById("hasil").innerText = `Luas = ${luas}`;
}