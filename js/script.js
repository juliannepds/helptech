let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
function mostrarCards(tecnologia) {
    var cards = document.querySelectorAll('.plano-estudo');
    cards.forEach(function(card) {
        if (card.id === tecnologia) {
            if (card.classList.contains('show')) {
                card.classList.remove('show');
            } else {
                card.classList.add('show');
            }
        } else {
            card.classList.remove('show');
        }
    });
}

function checkVisibility() {
    const elements = document.querySelectorAll('.button-tec');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
            element.style.opacity = 1; // Quando o elemento estiver visível, defina a opacidade como 1
            element.classList.add('animate-button-tec'); // Adiciona a classe para iniciar a animação
        }
    });
}

window.addEventListener('scroll', checkVisibility);
