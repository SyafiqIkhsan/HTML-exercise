function test1(number1, number2, angka) {
  console.log(number1 * number2 / angka)
}

test1(2, 3, 4)
test1(10, 20, 30)
test1(7, 9, 85)

function Hello(){
  const nama = parseInt(document.getElementById('nama').value)
  console.log('Hello World '+nama.value)
  const texthello = document.getElementById('text-hello')
  console.log('Hello '+ nama.value)
  texthello.innerHTML = 'Hello '+ nama.value
}
