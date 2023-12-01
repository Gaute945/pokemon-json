var is2open = 0;

const anormal = 0
const afire = 1
    const awater = 2
    const aelectric = 3
    const agrass = 4
    const aice = 5
    const afighting = 6
    const apoison = 7
    const aground = 8
    const aflying = 9
    const apsychic = 10
    const abug = 11
    const arock = 12
    const aghost = 13
    const adragon = 14
    const adark = 15
    const asteel = 16
    const afairy = 17

async function getpokemon() {
    const data = await fetch("pokemondata.json");
    const json = await data.json();
    console.log(json)
}
getpokemon();

pokemons = [normal, fire, water, electric, grass, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy];

function formulate(aType) {
    let type = json[anormal].type + " " + "moves are not very effective against" + " | " + json[anormal].attackcon + " | " + json[anormal].type + " " + "moves are super-effective against" + " | " + json[anormal].attackpro + " | " + "These types are not very effective against" + " " + json[anormal].type + " " + "Pokémon" + " | " + json[anormal].defensepro + " | " + "These types are super-effective against" + " " + json[anormal].type + " " + "pokemon" + " | " + json[anormal].defensecon + " | "
}

function setInnerHtml(pLetter) {
    document.getElementById(pLetter).innerHTML = pokemons[pLetter];
}

function showPokemon(buttonNum) {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[buttonNum];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open++
        var p = document.getElementsByTagName("p")[buttonNum];
        p.classList.remove("hidden");
        return is2open;
    }
}

function hideAllParagraphs() {
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.add("hidden");
    }
}

hideAllParagraphs()