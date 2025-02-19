async function openARandomCard(){
    await getARandomCard()
            .then(card => window.location.assign(card.url));
}

function getARandomCard(){
    return fetch('/craft-challenges/cards.json')
        .then(response => response.json())
        .then(result => result.challenges.cards)
        .then(cards => chooseCard(cards));
        //.then(card => console.log(card));
}

function chooseCard(cards){
    return cards[Math.floor(Math.random() * cards.length)];
}