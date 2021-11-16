const text = document.querySelector('p');
const btn = document.querySelector('button');
const searchCategory = document.querySelector('.search-category')
const img = document.querySelector('img');
const searchGif = document.querySelector('.search-gif');

btn.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random', {mode: "cors"})
    .then(data => {
        console.log(data)
        return data.json()
    })
    .then(response => {
        console.log(response);
        text.innerText = response.value
    })
    .catch(error => {
        console.log(error)
    })
})

searchCategory.addEventListener('search', () => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${searchCategory.value.toLowerCase()}`, {mode: "cors"})
    .then(data => {
        console.log(data)
        return data.json()
    })
    .then(response => {
        console.log(response)
        searchCategory.value = ''
        text.innerText = response.value
        img.src = response.data[Math.floor(Math.random() * response.length)]
    })
    .catch(error => {
        console.log(error)
    })
})

searchGif.addEventListener('search', () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=vD1Ea19GRTS5rMZLlYC8znr5omx23gI8&q=${searchGif.value}`, {mode: "cors"})
    .then(data => {
        console.log(data)
        return data.json()
    })
    .then(response => {
        console.log(response);
        img.src = response.data[Math.floor(Math.random() * response.data.length)].images.original.url
        searchGif.value = ''
    })
    .catch(error => {
        console.log(error)
        searchGif.value = ''
    })
})