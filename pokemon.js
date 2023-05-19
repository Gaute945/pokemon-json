async function getpokemon() {
    const data = await fetch("pokemondata.json");
    const json = await data.json();
    console.log(json)

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

    let normal = json[anormal].type + " " + "moves are not very effective against" + " | " + json[anormal].attackcon + " | " + json[anormal].type + " " + "moves are super-effective against" + " | " + json[anormal].attackpro + " | " + "These types are not very effective against" + " " + json[anormal].type + " " + "Pokémon" + " | " + json[anormal].defensepro + " | " + "These types are super-effective against" + " " + json[anormal].type + " " + "pokemon" + " | " + json[anormal].defensecon + " | "
    let fire = json[afire].type + " " + "moves are not very effective against" + " | " + json[afire].attackcon + " | " + json[afire].type + " " + "moves are super-effective against" + " | " + json[afire].attackpro + " | " + "These types are not very effective against" + " " + json[afire].type + " " + "Pokémon" + " | " + json[afire].defensepro + " | " + "These types are super-effective against" + " " + json[afire].type + " " + "pokemon" + " | " + json[afire].defensecon + " | "
    let water = json[awater].type + " " + "moves are not very effective against" + " | " + json[awater].attackcon + " | " + json[awater].type + " " + "moves are super-effective against" + " | " + json[awater].attackpro + " | " + "These types are not very effective against" + " " + json[awater].type + " " + "Pokémon" + " | " + json[awater].defensepro + " | " + "These types are super-effective against" + " " + json[awater].type + " " + "pokemon" + " | " + json[awater].defensecon + " | "
    let electric = json[aelectric].type + " " + "moves are not very effective against" + " | " + json[awater].attackcon + " | " + json[aelectric].type + " " + "moves are super-effective against" + " | " + json[aelectric].attackpro + " | " + "These types are not very effective against" + " " + json[aelectric].type + " " + "Pokémon" + " | " + json[aelectric].defensepro + " | " + "These types are super-effective against" + " " + json[aelectric].type + " " + "pokemon" + " | " + json[aelectric].defensecon + " | "
    let grass = json[agrass].type + " " + "moves are not very effective against" + " | " + json[agrass].attackcon + " | " + json[agrass].type + " " + "moves are super-effective against" + " | " + json[agrass].attackpro + " | " + "These types are not very effective against" + " " + json[agrass].type + " " + "Pokémon" + " | " + json[agrass].defensepro + " | " + "These types are super-effective against" + " " + json[agrass].type + " " + "pokemon" + " | " + json[agrass].defensecon + " | "
    let ice = json[aice].type + " " + "moves are not very effective against" + " | " + json[aice].attackcon + " | " + json[aice].type + " " + "moves are super-effective against" + " | " + json[aice].attackpro + " | " + "These types are not very effective against" + " " + json[aice].type + " " + "Pokémon" + " | " + json[aice].defensepro + " | " + "These types are super-effective against" + " " + json[aice].type + " " + "pokemon" + " | " + json[aice].defensecon + " | "
    let fighting = json[afighting].type + " " + "moves are not very effective against" + " | " + json[afighting].attackcon + " | " + json[afighting].type + " " + "moves are super-effective against" + " | " + json[afighting].attackpro + " | " + "These types are not very effective against" + " " + json[afighting].type + " " + "Pokémon" + " | " + json[afighting].defensepro + " | " + "These types are super-effective against" + " " + json[afighting].type + " " + "pokemon" + " | " + json[afighting].defensecon + " | "
    let poison = json[apoison].type + " " + "moves are not very effective against" + " | " + json[apoison].attackcon + " | " + json[apoison].type + " " + "moves are super-effective against" + " | " + json[apoison].attackpro + " | " + "These types are not very effective against" + " " + json[apoison].type + " " + "Pokémon" + " | " + json[apoison].defensepro + " | " + "These types are super-effective against" + " " + json[apoison].type + " " + "pokemon" + " | " + json[apoison].defensecon + " | "
    let ground = json[aground].type + " " + "moves are not very effective against" + " | " + json[aground].attackcon + " | " + json[aground].type + " " + "moves are super-effective against" + " | " + json[aground].attackpro + " | " + "These types are not very effective against" + " " + json[aground].type + " " + "Pokémon" + " | " + json[aground].defensepro + " | " + "These types are super-effective against" + " " + json[aground].type + " " + "pokemon" + " | " + json[aground].defensecon + " | "
    let flying = json[aflying].type + " " + "moves are not very effective against" + " | " + json[aflying].attackcon + " | " + json[aflying].type + " " + "moves are super-effective against" + " | " + json[aflying].attackpro + " | " + "These types are not very effective against" + " " + json[aflying].type + " " + "Pokémon" + " | " + json[aflying].defensepro + " | " + "These types are super-effective against" + " " + json[aflying].type + " " + "pokemon" + " | " + json[aflying].defensecon + " | "
    let psychic = json[apsychic].type + " " + "moves are not very effective against" + " | " + json[apsychic].attackcon + " | " + json[apsychic].type + " " + "moves are super-effective against" + " | " + json[apsychic].attackpro + " | " + "These types are not very effective against" + " " + json[apsychic].type + " " + "Pokémon" + " | " + json[apsychic].defensepro + " | " + "These types are super-effective against" + " " + json[apsychic].type + " " + "pokemon" + " | " + json[apsychic].defensecon + " | "
    let bug = json[abug].type + " " + "moves are not very effective against" + " | " + json[abug].attackcon + " | " + json[abug].type + " " + "moves are super-effective against" + " | " + json[abug].attackpro + " | " + "These types are not very effective against" + " " + json[abug].type + " " + "Pokémon" + " | " + json[abug].defensepro + " | " + "These types are super-effective against" + " " + json[abug].type + " " + "pokemon" + " | " + json[abug].defensecon + " | "
    let rock = json[arock].type + " " + "moves are not very effective against" + " | " + json[arock].attackcon + " | " + json[arock].type + " " + "moves are super-effective against" + " | " + json[arock].attackpro + " | " + "These types are not very effective against" + " " + json[arock].type + " " + "Pokémon" + " | " + json[arock].defensepro + " | " + "These types are super-effective against" + " " + json[arock].type + " " + "pokemon" + " | " + json[arock].defensecon + " | "
    let ghost = json[aghost].type + " " + "moves are not very effective against" + " | " + json[aghost].attackcon + " | " + json[aghost].type + " " + "moves are super-effective against" + " | " + json[aghost].attackpro + " | " + "These types are not very effective against" + " " + json[aghost].type + " " + "Pokémon" + " | " + json[aghost].defensepro + " | " + "These types are super-effective against" + " " + json[aghost].type + " " + "pokemon" + " | " + json[aghost].defensecon + " | "
    let dragon = json[adragon].type + " " + "moves are not very effective against" + " | " + json[adragon].attackcon + " | " + json[adragon].type + " " + "moves are super-effective against" + " | " + json[adragon].attackpro + " | " + "These types are not very effective against" + " " + json[adragon].type + " " + "Pokémon" + " | " + json[adragon].defensepro + " | " + "These types are super-effective against" + " " + json[adragon].type + " " + "pokemon" + " | " + json[adragon].defensecon + " | "
    let dark = json[adark].type + " " + "moves are not very effective against" + " | " + json[adark].attackcon + " | " + json[adark].type + " " + "moves are super-effective against" + " | " + json[adark].attackpro + " | " + "These types are not very effective against" + " " + json[adark].type + " " + "Pokémon" + " | " + json[adark].defensepro + " | " + "These types are super-effective against" + " " + json[adark].type + " " + "pokemon" + " | " + json[adark].defensecon + " | "
    let steel = json[asteel].type + " " + "moves are not very effective against" + " | " + json[asteel].attackcon + " | " + json[asteel].type + " " + "moves are super-effective against" + " | " + json[asteel].attackpro + " | " + "These types are not very effective against" + " " + json[asteel].type + " " + "Pokémon" + " | " + json[asteel].defensepro + " | " + "These types are super-effective against" + " " + json[asteel].type + " " + "pokemon" + " | " + json[asteel].defensecon + " | "
    let fairy = json[afairy].type + " " + "moves are not very effective against" + " | " + json[afairy].attackcon + " | " + json[afairy].type + " " + "moves are super-effective against" + " | " + json[afairy].attackpro + " | " + "These types are not very effective against" + " " + json[afairy].type + " " + "Pokémon" + " | " + json[afairy].defensepro + " | " + "These types are super-effective against" + " " + json[afairy].type + " " + "pokemon" + " | " + json[afairy].defensecon + " | "

    document.getElementById("data0").innerHTML = normal;
    document.getElementById("data1").innerHTML = fire;
    document.getElementById("data2").innerHTML = water;
    document.getElementById("data3").innerHTML = electric;
    document.getElementById("data4").innerHTML = grass;
    document.getElementById("data5").innerHTML = ice;
    document.getElementById("data6").innerHTML = fighting;
    document.getElementById("data7").innerHTML = poison;
    document.getElementById("data8").innerHTML = ground;
    document.getElementById("data9").innerHTML = flying;
    document.getElementById("data10").innerHTML = psychic;
    document.getElementById("data11").innerHTML = bug;
    document.getElementById("data12").innerHTML = rock;
    document.getElementById("data13").innerHTML = ghost;
    document.getElementById("data14").innerHTML = dragon;
    document.getElementById("data15").innerHTML = dark;
    document.getElementById("data16").innerHTML = steel;
    document.getElementById("data17").innerHTML = fairy;
}
getpokemon();

var is2open = 0;

function showNormal() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[0];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[0];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showFire() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[1];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[1];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showWater() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[2];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[2];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showElectric() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[3];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[3];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showGrass() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[4];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[4];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showIce() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[5];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[5];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showFighting() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[6];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[6];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showPoison() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[7];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[7];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showGround() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[8];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[8];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showFlying() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[9];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showPsychic() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[10];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[10];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showBug() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[11];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[1];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showRock() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[12];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[12];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showGhost() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[13];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[13];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showDragon() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[14];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[14];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showDark() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[15];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[15];
        p.classList.remove("hidden");
        return is2open;
    }
}

function showSteel() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[16];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[16];
        p.classList.remove("hidden");
        return is2open;
    }
}
function showFairy() {
    if (is2open == 2) {
        hideAllParagraphs()
        is2open = 1;
        var p = document.getElementsByTagName("p")[17];
        p.classList.remove("hidden");
        return is2open;
    } else {
        is2open ++
        var p = document.getElementsByTagName("p")[17];
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