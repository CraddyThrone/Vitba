
let photo2 = document.querySelector('.staffImgPeopleTwo')
let blur = document.querySelector('.blur')
let html = document.querySelector('html')

photo2.addEventListener('click', function() {

   
  
    photo2.classList.toggle('bg__pone')
})

blur.addEventListener('click', function() {
    
    blur.style.opacity = '0%';

    setTimeout(function(){

    blur.style.display = 'none'

}, 1000)

    html.style.overflow = 'auto'
})