// ----------------- cards scale

const petsCard = document.querySelectorAll('.pets-card')
const petsCardImg = document.querySelectorAll('.pets-card-img')
const petsDescription = document.querySelectorAll('.pets-description')


petsCard.forEach(el =>
    el.addEventListener("mouseover", function(){
        let ind = 0;
        for(let i = 0; i < petsCard.length ; i++){
            if(petsCard[i] == el){
                ind = i;
            }
        } 
        petsCardImg[ind].classList.add('pets-card-img-hover');
        petsDescription[ind].classList.add('pets-description-hover');
    })
)
petsCard.forEach(el =>
    el.addEventListener("mouseout", function(){
        let ind = 0;
        for(let i = 0; i < petsCard.length ; i++){
            if(petsCard[i] == el){
                ind = i;
            }
        } 
        petsCardImg[ind].classList.remove('pets-card-img-hover');
        petsDescription[ind].classList.remove('pets-description-hover');
    })
)


//   изменение цвета картинки соцсетей по наведению

const footerA = document.querySelectorAll('.footer-a')
const footerAimg = document.querySelectorAll('.footer-a-img')


footerA.forEach(el =>
    el.addEventListener("mouseover", function(){
        let ind = 0;
        for(let i = 0; i < footerA.length ; i++){
            if(footerA[i] == el){
                ind = i;
            }
        } 
        footerAimg[ind].classList.add('footer-a-img-hover');
    })
)
footerA.forEach(el =>
    el.addEventListener("mouseout", function(){
        let ind = 0;
        for(let i = 0; i < footerA.length ; i++){
            if(footerA[i] == el){
                ind = i;
            }
        } 
        footerAimg[ind].classList.remove('footer-a-img-hover');
    })
)

// --------- validation form

const fni = document.getElementById("fni");
const fnb = document.querySelector('.footer-news-button')

fni.addEventListener("input", function (event) {
  if (fni.validity.typeMismatch) {
    fnb.classList.add('footer-news-button-error')
    fnb.classList.remove('footer-news-button-ok')
  } else {
    fnb.classList.add('footer-news-button-ok')
    fnb.classList.remove('footer-news-button-error')
  }
});


//-----------------------popup

const burgerButton = document.querySelector('.burger-button');
const wrapperPopapBurger = document.querySelector('.wrapper-popap-burger');
const wrapperBurgerClose = document.querySelector('.wrapper-burger-close');
const ixsPopapClose = document.querySelector('.ixs-popap-close');

burgerButton.addEventListener('click', function(){
  wrapperPopapBurger.classList.add('wrapper-popap-burger-open')
});
wrapperBurgerClose.addEventListener('click', function(){
  wrapperPopapBurger.classList.remove('wrapper-popap-burger-open')
});
ixsPopapClose.addEventListener('click', function(){
  wrapperPopapBurger.classList.remove('wrapper-popap-burger-open')
});
  //-----------------------carousel

  const prevArrow = document.querySelector('.pets-arrow-left');
  const nextArrow = document.querySelector('.pets-arrow-right');
  let petsWrapperCard = document.getElementById('wrapperPets')
  let arrCards = document.querySelectorAll('.pets-card');
  arrCards = Array.from(arrCards);
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
   nextArrow.addEventListener('click', function(){
    shuffleArray(arrCards)
    nextArrow.classList.add('pets-arrow-none')
    let last = () => {
      for(let i = 0 ; i < 6 ; i++){
        arrCards.push(arrCards[0])
        arrCards.shift(arrCards[0])
        petsWrapperCard.prepend(arrCards[0])
      }
      nextArrow.classList.remove('pets-arrow-none')
    }
    setTimeout(last, 1000)
 })

 prevArrow.addEventListener('click', function(){
  shuffleArray(arrCards)
  prevArrow.classList.add('pets-arrow-none')
  let last = () => {
    for(let i = 0 ; i < 6 ; i++){
      arrCards.push(arrCards[0])
      arrCards.shift(arrCards[0])
      petsWrapperCard.prepend(arrCards[0])
    }
    prevArrow.classList.remove('pets-arrow-none')
  }
  setTimeout(last, 500)
})

//----------------------------

const elem = document.querySelector('input[type="range"]');
let testimoniasWrapper = document.querySelector('.testimonias-wrapper')
let testimCards = document.querySelectorAll('.testimonials-card');
testimCards = Array.from(testimCards);

const rangeValue = function(){

  let newValue = elem.value;
  let target = document.querySelector('.value');

  if(newValue == 0){
    testimoniasWrapper.style.left =  0 + 'px';
    } else if ( newValue == 1){
      testimoniasWrapper.style.left =  -306 + 'px';
    } else if ( newValue == 2){
      testimoniasWrapper.style.left =  -612 + 'px';
    } else if ( newValue == 3){
      testimoniasWrapper.style.left =  -918 + 'px';
    } else if ( newValue == 4){
      testimoniasWrapper.style.left =  -1224 + 'px';
    } else if ( newValue == 5){
      testimoniasWrapper.style.left =  -1530 + 'px';
    } else if ( newValue == 6){
      testimoniasWrapper.style.left =  -1836 + 'px';
    } else if ( newValue == 7){
      testimoniasWrapper.style.left =  -2142 + 'px';
    } else if ( newValue == 8){
      testimoniasWrapper.style.left =  -2448 + 'px';
    }
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);

//---------------------------------

let testimonialsCard = document.querySelectorAll('.testimonials-card')
let testimonialsCardIxs = document.querySelectorAll('.testimonials-card-ixs')

testimonialsCard[0].addEventListener('click', function(){
  testimonialsCard[0].classList.add('testimonials-card-open')
  testimonialsCardIxs[0].classList.remove('testimonials-card-ixs-close')
})
testimonialsCard[1].addEventListener('click', function(){
  testimonialsCard[1].classList.add('testimonials-card-open')
  testimonialsCardIxs[1].classList.remove('testimonials-card-ixs-close')
})
testimonialsCard[2].addEventListener('click', function(){
  testimonialsCard[2].classList.add('testimonials-card-open')
  testimonialsCardIxs[2].classList.remove('testimonials-card-ixs-close')
})
 
  document.addEventListener( 'click', (e) => {
    if(testimonialsCard[0].classList.contains('testimonials-card-open')){
      const withinBoundaries = e.composedPath().includes(testimonialsCard[0]);
      const withinBoundariesIxs = e.composedPath().includes(testimonialsCardIxs[0]);
     if ( ! withinBoundaries || withinBoundariesIxs) {
        testimonialsCard[0].classList.remove('testimonials-card-open')
        testimonialsCardIxs[0].classList.add('testimonials-card-ixs-close')
     }
    }
    if(testimonialsCard[1].classList.contains('testimonials-card-open')){
      const withinBoundaries = e.composedPath().includes(testimonialsCard[1]);
      const withinBoundariesIxs = e.composedPath().includes(testimonialsCardIxs[1]);
     if ( ! withinBoundaries || withinBoundariesIxs) {
        testimonialsCard[1].classList.remove('testimonials-card-open')
        testimonialsCardIxs[1].classList.add('testimonials-card-ixs-close')
     }
    }
    if(testimonialsCard[2].classList.contains('testimonials-card-open')){
      const withinBoundaries = e.composedPath().includes(testimonialsCard[2]);
      const withinBoundariesIxs = e.composedPath().includes(testimonialsCardIxs[2]);
     if ( ! withinBoundaries || withinBoundariesIxs) {
        testimonialsCard[2].classList.remove('testimonials-card-open')
        testimonialsCardIxs[2].classList.add('testimonials-card-ixs-close')
     }
    }
  })