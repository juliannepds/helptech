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

