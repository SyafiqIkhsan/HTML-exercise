const counter = document.querySelector('#counter')
const jamText = document.querySelector('#jam')
const menitText = document.querySelector('#menit')
const detikText = document.querySelector('#detik')
const btnStop = document.getElementById('btn-stop')
const btnStart = document.getElementById('btn-start')
const btnReset = document.getElementById('btn-reset')

let jam = Number(jamText.textContent)
let menit = Number(menitText.textContent)
let detik = Number(detikText.textContent)

const increment = () => {
  detik++
  if(detik == 60) {
    menit++
    detik = 0
  }
  if(menit == 60) {
    jam++
    menit = 0
  }
  detikText.textContent = (detik < 10)?'0'+detik:detik
  menitText.textContent = (menit < 10)?'0'+menit:menit
  jamText.textContent = (jam < 10)?'0'+jam:jam
}

let timer
btnStart.addEventListener('click', ()=>{
timer = setInterval(increment,1000)
})


btnStop.addEventListener('click', ()=>{
  clearInterval(timer)
})

btnReset.addEventListener('click', ()=>{
  detikText.textContent = '00'
  menitText.textContent = '00'
  jamText.textContent = '00'
  clearInterval(timer)
})