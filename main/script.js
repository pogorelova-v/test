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

//-------------scroll progres

let scrollElem = testimonialslineScroll.querySelector('.testimonialsline-scroll-elem')

scrollElem.onmousedown = function(event) { // слушаем нажатие на бегунок
    event.preventDefault(); // убираем действие браузера по умолчанию

  let shiftX = event.clientX - scrollElem.getBoundingClientRect().left; // переменная на изменение координат в окне

    document.addEventListener('mousemove', onMouseMove); // при движении идем в функцию
    document.addEventListener('mouseup', onMouseUp); // при остановке идём в функцию

  function onMouseMove(event) {  // функция движения
        let newLeft = event.clientX - shiftX - testimonialslineScroll.getBoundingClientRect().left;  // новая координата от движения

        // заставляем бегунок остаться в границах слайдера.
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = testimonialslineScroll.offsetWidth - scrollElem.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        scrollElem.style.left = newLeft + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

scrollElem.ondragstart = function() { // отключаем Drag’n’Drop браузера
      return false;
};

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