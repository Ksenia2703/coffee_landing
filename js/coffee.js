let getConsultation = document.getElementById('getConsultation');
let modalApplications = document.getElementById('modalApplications');
let gratitudeWindow = document.getElementById('gratitudeWindow')

// при клике на "получить консультацию" открывается модальное окно "оставьте заявку"
getConsultation.addEventListener('click', () => {
        modalApplications.classList.remove('d-none');
})


//при клике на крестика закрывается модальное окно "оставьте заявку"
modalApplications.addEventListener('click', (e) => {
    let elementHtml = e.target;
    if(elementHtml.classList.contains('close-modal')) {
        modalApplications.classList.add('d-none');
        let phoneNumber = document.getElementById('phone-number');
        let name = document.getElementById('name');
        phoneNumber.value = '';
        name.value = '';
    }

    let tick = document.getElementById('tick');
    let circle = document.getElementById('circle')

    if (elementHtml.classList.contains('inp-send')) {
        
        let countErorrs = 0;
        let phoneNumber = document.getElementById('phone-number');
        let name = document.getElementById('name');
        if (phoneNumber.value.length < 18) {
            phoneNumber.classList.add('error');
            countErorrs++;
        } else {
            phoneNumber.classList.remove('error');
        }

        if (name.value.length < 2) {
            name.classList.add('error');
            countErorrs++;
        } else {
            name.classList.remove('error');
        }
        
        
        if (countErorrs === 0) {
            modalApplications.classList.add('d-none');
            gratitudeWindow.classList.remove('hidden');
            tick.classList.add('tick');
            circle.classList.add('circle');

            phoneNumber.value = '';
            name.value = '';
        }
        
    }
    
})
// при клике на "хорошо" закрывается модальное окно благодарности 
gratitudeWindow.addEventListener('click', (e) =>{
    let elementHtml = e.target;
    if(elementHtml.classList.contains('inp-well')) {
        gratitudeWindow.classList.add('hidden');
    }
})

let firstCard = document.getElementById('firstCard');
let firstCardNumber = document.getElementById('firstCardNumber');

let secondCard= document.getElementById('secondCard');
let secondCardNumber = document.getElementById('secondCardNumber');

let thirdCard = document.getElementById('thirdCard');
let thirdCardNumber = document.getElementById('thirdCardNumber');


firstCardNumber.addEventListener('click', () => {
    firstCard.classList.add('z-index');
    secondCard.classList.remove('z-index');
    thirdCard.classList.remove('z-index');
    firstCardNumber.classList.add('click-color');
    secondCardNumber.classList.remove('click-color');
    thirdCardNumber.classList.remove('click-color');
})

secondCardNumber.addEventListener('click', () => {
    secondCard.classList.add('z-index');
    firstCard.classList.remove('z-index');
    thirdCard.classList.remove('z-index');
    secondCardNumber.classList.add('click-color');
    firstCardNumber.classList.remove('click-color');
    thirdCardNumber.classList.remove('click-color');
})

thirdCardNumber.addEventListener('click', () => {
    thirdCard.classList.add('z-index');
    firstCard.classList.remove('z-index');
    secondCard.classList.remove('z-index');
    thirdCardNumber.classList.add('click-color');
    firstCardNumber.classList.remove('click-color');
    secondCardNumber.classList.remove('click-color');
})


var phone = IMask(
    document.getElementById('phone-number'), {
        mask: '+{7} (000) 000-00-00'
    });




























