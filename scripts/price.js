let cards = document.querySelectorAll('.price__list-card')
let button = document.querySelector('.price__button')

const selectLink = (card) => {
     for(let i = 0; i < cards.length; i++){
         if(card == cards[i]) button.setAttribute('href', `https://www.google.com/search?q=${i+1}`)
     }
}


cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => card.classList.remove('active'))
        card.classList.add('active')
        selectLink(card)
    })
})