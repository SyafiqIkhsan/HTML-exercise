const content = document.querySelector('#content')
let url = './data.json'
const hitAPI = async (url) => {
  const api = await fetch(url)
  const data = api.json()
  return data
}


document.addEventListener('DOMContentLoaded', async () => {
  let data = await hitAPI(url);
  console.log(data)
  let teks = '<ul class="movie>'
  data.forEach(element => {
    teks += ``
  })
})