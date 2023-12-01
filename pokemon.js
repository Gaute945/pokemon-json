var is2open = 0;
var json;
pokemons = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];

async function getpokemon() {
    const data = await fetch("pokemondata.json");
    const json = await data.json();
}

function formulateHtml(aType, pLetter) {
    let type = json[aType].type + " " + "moves are not very effective against" + " | " + json[aType].attackcon + " | " + json[aType].type + " " + "moves are super-effective against" + " | " + json[aType].attackpro + " | " + "These types are not very effective against" + " " + json[aType].type + " " + "Pokémon" + " | " + json[aType].defensepro + " | " + "These types are super-effective against" + " " + json[aType].type + " " + "pokemon" + " | " + json[aType].defensecon + " | "
    document.getElementById(pLetter).innerHTML = type;
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

function loop(buttonNum, aType, pLetter) {
    hideAllParagraphs();
    getpokemon();
    showPokemon(buttonNum);
    formulateHtml(aType, pLetter);
}