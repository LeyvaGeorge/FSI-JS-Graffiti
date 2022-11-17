let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

//moving name of dog to be left align
let dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogName.length; i++){
    dogName[i].style.textAlign = "left"
}

//change the color to footer text
let footerColor = document.querySelector('.footer')
footerColor.style.color = 'red'

//fliping the image 180 Degrees
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.trasform = 'rotate(180deg)'
}