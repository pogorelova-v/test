const burgerBar = document.querySelector('.burger-bar');
const burgerBarClose = document.querySelector('.burger-bar-close');
const burgerBarContent = document.querySelector('.burger-bar-content');

burgerBar.addEventListener('click', () => {
    burgerBar.classList.add('scale0');
    burgerBarClose.classList.remove('scale0');
    burgerBarContent.classList.remove('height0');    
});

document.addEventListener( 'click', (e) => {
	const withinBoundariesIx = e.composedPath().includes(burgerBar);
	const withinBoundaries = e.composedPath().includes(servicesMainMenu);
	if ( !withinBoundariesIx && !withinBoundaries) {
        burgerBar.classList.remove('scale0');
        burgerBarClose.classList.add('scale0');
        burgerBarContent.classList.add('height0'); 
	}
});

//-----------для второстип страниц

const servicesMainMenu = document.querySelector('.services-main-menu');

servicesMainMenu.addEventListener('click', () => {
    burgerBarContent.classList.toggle('height0');    
});



//-------------------------------------

const serviceItems = document.querySelectorAll('.service');
const serviceImg = document.querySelectorAll('.service-img');

serviceItems.forEach((element,index) => {
    element.addEventListener('mouseover', () => {
        serviceImg[index].classList.add('scale12')
    })    
});
serviceItems.forEach((element,index) => {
    element.addEventListener('mouseout', () => {
        serviceImg[index].classList.remove('scale12')
    })    
});

//---------------------------------------------------
const stickyMenu = document.querySelector('.sticky-menu-contain');
const scrollHeight = stickyMenu.offsetTop;

window.addEventListener('scroll', function() {
    let windowHeight = window.pageYOffset;
    if(windowHeight > scrollHeight){
        stickyMenu.classList.add('sticky-menu')
    } else {
        stickyMenu.classList.remove('sticky-menu')
    }
  });

  //------------------------------------------------------------

const detailedData = document.querySelector('.detailed-data-span');
const detailedDataWrap = document.querySelector('.detailed-data');
const detailedDataImg = document.querySelector('.detailed-data-img');
const detailedDataContent = document.querySelector('.detailed-data-content');

let openData = detailedData.textContent;

detailedDataWrap.addEventListener('click', () => {
    let textC = detailedData.textContent;
        if(textC === 'Развернуть подробные данные'){
            detailedData.textContent = 'Свернуть подробные данные';
            openData = 'Свернуть подробные данные';
            detailedDataImg.classList.add('detailed-data-active-img')
            detailedDataContent.classList.add('detailed-data-content-active')
        } else {
            detailedData.textContent = 'Развернуть подробные данные';
            openData = 'Развернуть подробные данные';
            detailedDataImg.classList.remove('detailed-data-active-img')
            detailedDataContent.classList.remove('detailed-data-content-active')
        }
}); 

//--------------------------------------------------------------

const formPopap = document.querySelector('.form');
const formbody = document.querySelector('form');
const buttonFormPopup = document.querySelector('.button-formPopup');
const closePopup = document.querySelector('.close-popup');
const formButton = document.querySelector('.form__button');

buttonFormPopup.addEventListener('click', () => {
    formPopap.classList.add('form-active')
});

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(formbody);
	const withinBoundariesBut = e.composedPath().includes(buttonFormPopup);
	const withinBoundariesIx = e.composedPath().includes(closePopup);
	const withinBoundariesFB = e.composedPath().includes(formButton);
 
	if ( ! withinBoundaries && ! withinBoundariesBut) {
		formPopap.classList.remove('form-active')
	} else if (withinBoundariesIx || withinBoundariesFB){
        formPopap.classList.remove('form-active')
    }
}) 

//---------------------------------------------

const servicesPageImg = document.querySelectorAll('.services-img')
const servicesPageDescription = document.querySelector('.services-description')
const reasonsText = document.querySelector('.reasons')

servicesPageImg.forEach((element) => {
    element.addEventListener('click', () => {
        if(index = 0){
            element.classList.toggle('services-img-open')
            servicesPageDescription.classList.toggle('services-description-open')
        } else {
            element.classList.toggle('services-img-open')
        }

        if(element.classList.contains('reasons-img')){
            reasonsText.classList.toggle('dn')
        }

    })    
});


document.addEventListener( 'click', (e) => {
    servicesPageImg.forEach((element) => {
        const withinBoundaries = e.composedPath().includes(element);
	    if ( ! withinBoundaries) {
		    element.classList.remove('services-img-open')
            
	    }   
    });
})

//------------------------------------------------------------


//Форма обр связи

document.addEventListener('DOMContentLoaded', function(){ //ждём пока страница полностью прогрузится
    const form = document.getElementById('form'); //объявляем переменную, присваиваем в неё всю форму по id
    form.addEventListener('submit', formSend); // formSend слушаем событие submit в форме, по клику мы перейдём в функцию formSend
 
    async function formSend(e) { // функция formSend
        e.preventDefault();  //запрет на стандартную отправку формы, что бы сделать это без перезагрузки
 
        let error = formValidate(form); //переменная еррор имеет значение полученное в функции formValidate
        
        let formData = new FormData(form); //получам данные формы
 
        if (error===0){                 //если ошибок нет, то
 
         form.classList.add('_sending');  //форма принимает класс сендинг, пока грузится, с гифкой можно
 
         let response = await fetch('send.php', {  // ждём пока данные из формы отправЯтся в файл php
            method: 'POST',  //Отправка методом пост
            body: formData   //Данных из формы
         });
 
         if (response.ok){   //если форма удачно отправлена
             let result = await response.json(); //присваиваеи
             alert(result.message);   // выводим сообщение из кода php
             form.reset();  //очищаем форму
             form.classList.remove('_sending');  //убираем класс загрузки
 
         } else {
             alert("Повторите отправку");  //если какая-то ошибка при отпраке
             form.classList.remove('_sending');  //убираем класс загрузки
         }
 
        } else {                  //если ошиби есть, то
            alert('Заполните поля'); 
        }
 
    }
 
    function formValidate(form) { //проверяем заполненость обязательных полей
        let error = 0; //Изначально ошибок нет
        let formReq = document.querySelectorAll('._req'); //ищем все поля с классом _рег, запихиваем в массив
 
        for (let i = 0; i < formReq.length; i++){ //цикл, перебирает элементы пока длинна массива (который выше)
            const input = formReq[i]; //переменная инпут со значаением элемента из массива по номеру i
            formRemoveError(input); //изначально убираем класс ошибки
 
            if (input.getAttribute("type") === "checkbox" && input.checked === false){ //если поле это чекбокс и он пуст, то
                formAddError(input); //добавляем жлементу класс "ошибка" (функция в конце)
                error++; //добавляем 1 к переменной ошибка
            } else {
                if ( input.value === '') { //простая проверка,если значение поля  равно пустоте, то
                 formAddError(input); //добавляем жлементу класс "ошибка" (функция в конце)
                 error++;  //добавляем 1 к переменной ошибка
                }
            }
 
        }
        return error; //возвращаем кол-во ошибок
    }
 
    function formAddError(input) {     //фунция добавления класса "ошибка"  элементу 
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }
    function formRemoveError(input) {       //фунция убираем класс "ошибка" элементу 
     input.parentElement.classList.remove('_error')
     input.classList.remove('_error')
   }

 });