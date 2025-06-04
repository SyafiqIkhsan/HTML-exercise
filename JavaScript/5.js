function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function cekPrima() {
    let num = parseInt(document.getElementById('number').value);
    if (isNaN(num)) {
        document.getElementById('hasil').innerText = "Masukkan angka yang valid.";
        return;
    }
    let hasil = isPrime(num) ? "adalah bilangan prima" : "bukan bilangan prima";
    document.getElementById('hasil').innerText = num + " " + hasil;
}