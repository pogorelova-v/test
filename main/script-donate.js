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
        stepBarElipse[ind].classList.remove('step-bar-elipse-active');        stepBarSum[ind].classList.remove('step-bar-sum-active');
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


//----------------------------------


const anotherAmountInpute = document.getElementById('anotherAmountInpute')
anotherAmountInpute.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0,4); 
    }
}