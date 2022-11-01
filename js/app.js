const assets = [
    "main-pic-1.webp", "main-pic-2.webp"
]

let active_image_index = 0

setInterval(() => {
    active_image_index++

    if(active_image_index >= assets.length) active_image_index = 0
    document.querySelector('.home').style.backgroundImage = `url(assets/${assets[active_image_index]})`
}, 5000)



const home = document.querySelector('.home')

home.style.backgroundImage = `url('src', assets/${assets[0]})`

function createSliderPages() {
    for(let i = 0; i < assets.length; i++) {
        // Krijimi i Elementit
        const li = document.createElement('li')
        li.setAttribute('data-target', assets[i])
        
        // Ktu eshte duke ju bashkangjit UL-s
        document.querySelector('#dot-slider').appendChild(li)

        li.addEventListener('click', e => {
            img.src = `assets/${e.target.getAttribute('data-target')}`
        })
    }
}

createSliderPages()


