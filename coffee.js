let getConsultation = document.getElementById('getConsultation');
let modalApplications = document.getElementById('modalApplications');
let gratitudeWindow = document.getElementById('gratitudeWindow')

// при клике на "получить консультацию" открывается модальное окно "оставьте заявку"
getConsultation.addEventListener('click', () =>{
        modalApplications.classList.remove('d-none');
})
//при клике на крестика закрывается модальное окно "оставьте заявку"
modalApplications.addEventListener('click', (e) => {
    let elementHtml = e.target;
    if(elementHtml.classList.contains('close-modal')) {
        modalApplications.classList.add('d-none');
    }

    let tick = document.getElementById('tick');
    let circle = document.getElementById('circle')

    if(elementHtml.classList.contains('inp-send')) {
        modalApplications.classList.add('d-none');
        gratitudeWindow.classList.remove('hidden');
        tick.classList.add('tick');
        circle.classList.add('circle')
    }

    
    
})
// при клике на "хорошо" закрывается модальное окно благодарности 
gratitudeWindow.addEventListener('click', (e) =>{
    let elementHtml = e.target;
    if(elementHtml.classList.contains('inp-well')) {
        gratitudeWindow.classList.add('hidden');
    }
})




























