var btnPrice = document.querySelectorAll('.product button')
var gallary = document.querySelector('.gallary')
var close = document.querySelector('.close')
var gallaryImg = document.querySelector('.list-product .product img')


// var currentIndex = 0;
btnPrice.forEach((item, index) => {
    item.addEventListener('click', function () {
        // currentIndex = index
        // gallaryImg.src = btnPrice[currentIndex].src
        gallary.classList.add('show')
    })

})
close.addEventListener('click', function () {
    gallary.classList.remove('show')
})


