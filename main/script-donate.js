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

//-------------------popup

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

// ----------------- Amount count

const stepBarElipse = document.querySelectorAll('.step-bar-elipse')
const stepBarSum = document.querySelectorAll('.step-bar-sum')


stepBarElipse.forEach(el =>
    el.addEventListener("mouseover", function(){
        let ind = 0;
        for(let i = 0; i < stepBarElipse.length ; i++){
        stepBarElipse[i].classList.remove('step-bar-elipse-active-click');
        stepBarSum[i].classList.remove('step-bar-sum-active-click');
            if(stepBarElipse[i] == el){
                ind = i;
            }
        } 
        stepBarElipse[ind].classList.add('step-bar-elipse-active');
        stepBarSum[ind].classList.add('step-bar-sum-active');
    })
)
stepBarElipse.forEach(el =>
    el.addEventListener("mouseout", function(){
        let ind = 0;
        for(let i = 0; i < stepBarElipse.length ; i++){
            if(stepBarElipse[i] == el){
                ind = i;
            }
        } 
        stepBarElipse[ind].classList.remove('step-bar-elipse-active');       
         stepBarSum[ind].classList.remove('step-bar-sum-active');
    })
)


stepBarElipse.forEach(el =>
    el.addEventListener("click", function(){
            let ind = 0;
        for(let i = 0; i < stepBarElipse.length ; i++){
            if(stepBarElipse[i] == el){
                ind = i;
            }
        } 
        stepBarElipse[ind].classList.add('step-bar-elipse-active-click');
        stepBarSum[ind].classList.add('step-bar-sum-active-click');
    })
)


//anotherAmountInpute.value = 

//---------------------------------- anotherAmountInpute 


let anotherAmountInpute = document.getElementById('anotherAmountInpute')

stepBarElipse[0].addEventListener('click', () => {
    anotherAmountInpute.value = 5000;
})
stepBarElipse[1].addEventListener('click', () => {
    anotherAmountInpute.value = 2000;
})
stepBarElipse[2].addEventListener('click', () => {
    anotherAmountInpute.value = 1000;
})
stepBarElipse[3].addEventListener('click', () => {
    anotherAmountInpute.value = 500;
})
stepBarElipse[4].addEventListener('click', () => {
    anotherAmountInpute.value = 250;
})
stepBarElipse[5].addEventListener('click', () => {
    anotherAmountInpute.value = 100;
})
stepBarElipse[6].addEventListener('click', () => {
    anotherAmountInpute.value = 50;
})
stepBarElipse[7].addEventListener('click', () => {
    anotherAmountInpute.value = 25;
})


anotherAmountInpute.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0,4); 
    }    
}
anotherAmountInpute.oninput = function () {

    stepBarElipse.forEach(el =>{
        el.classList.remove('step-bar-elipse-active-click');
    })
    stepBarSum.forEach(el =>{
        el.classList.remove('step-bar-sum-active-click');
    })

    if(this.value == 5000){
      stepBarElipse[0].classList.add('step-bar-elipse-active-click');
      stepBarSum[0].classList.add('step-bar-sum-active-click');
    } else if(this.value == 2000){
        stepBarElipse[1].classList.add('step-bar-elipse-active-click');
        stepBarSum[1].classList.add('step-bar-sum-active-click');
    } else if(this.value == 1000){
        stepBarElipse[2].classList.add('step-bar-elipse-active-click');
        stepBarSum[2].classList.add('step-bar-sum-active-click');
    } else if(this.value == 500){
        stepBarElipse[3].classList.add('step-bar-elipse-active-click');
        stepBarSum[3].classList.add('step-bar-sum-active-click');
    } else if(this.value == 250){
        stepBarElipse[4].classList.add('step-bar-elipse-active-click');
         stepBarSum[4].classList.add('step-bar-sum-active-click');
    } else if(this.value == 100){
        stepBarElipse[5].classList.add('step-bar-elipse-active-click');
        stepBarSum[5].classList.add('step-bar-sum-active-click');
    } else if(this.value == 50){
         stepBarElipse[6].classList.add('step-bar-elipse-active-click');
         stepBarSum[6].classList.add('step-bar-sum-active-click');
    } else if(this.value == 25){
        stepBarElipse[7].classList.add('step-bar-elipse-active-click');
        stepBarSum[7].classList.add('step-bar-sum-active-click');
    } 
}