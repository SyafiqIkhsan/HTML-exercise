function cekGenapGanjil() {
    const num = parseInt(document.getElementById('num1').value);
    if (isNaN(num)) {
        document.getElementById('output1').innerText = "Masukkan angka yang valid!";
        return;
    }
    const hasil = (num % 2 === 0) ? "Genap" : "Ganjil";
    document.getElementById('output1').innerText = `Angka ${num} adalah ${hasil}.`;
}