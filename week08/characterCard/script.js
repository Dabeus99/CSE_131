const CharacterCard = {
    image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 1,
    health: 100,


    attacked: function(){
        this.health -= 20;

        if(this.health <= 0) {
            window.alert('Snortleblat died')
        }
    },

    levelUp: function(){
        this.level ++;
    }

}



function characterCardTemplate(character_card) {

return` 
<div class="card">
            <img 
            class="image"
            src='${character_card.image}'
            alt="${character_card.name}" 
            >

            <h1 class="name">${character_card.name}</h1>

            <div class="stats">
                <p> Class:${character_card.class}</p>
                <p> Level: ${character_card.level}</p>
                <p> Health: ${character_card.health}</p>

                <div class="buttons">
                    <button id="attackButton">Attacked</button>
                    <button id="levelButton">Level Up</button>
                </div>
            </div>
        </div>
        `;

}


const characterCard = document.querySelector("#character-card");

function renderCard() {
    characterCard.innerHTML = characterCardTemplate(CharacterCard);

    const attackButton = document.querySelector("#attackButton");
    const levelButton = document.querySelector("#levelButton");

    attackButton.addEventListener("click", function () {
        CharacterCard.attacked();
        renderCard();
    });

    levelButton.addEventListener("click", function () {
        CharacterCard.levelUp();
        renderCard();
    });
}

renderCard();

