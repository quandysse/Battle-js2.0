let playerOne = document.getElementsByClassName('playerOne');
let playerTwo = document.getElementsByClassName('playerTwo');
let lifePlayerOne = document.querySelector('.lifePlayerOne');
let lifePlayerTwo = document.querySelector('.lifePlayerTwo');
let healPlayerOne = document.getElementById('healPlayerOne');
let healPlayerTwo = document.getElementById('healPlayerTwo');
let attackPlayerOne = document.getElementById('attackPlayerOne');
let attackPlayerTwo = document.getElementById('attackPlayerTwo');
let specialPlayerOne = document.getElementById('specialPlayerOne');
let speciallayerTwo = document.getElementById('speciallayerTwo');

class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    checkHealth() {
        if(this.health <= 0) {
            this.health = 0;
            console.log(this.name + ' est mort !');
        }else {
            console.log(this.name + ' a ' + this.health + ' points de vie');
        }
    }

        attackEnnemy(character) {
        character.health -= this.attack;
        console.log(this.name + ' attaque ' + character.name + ' et lui cause ' + this.attack + ' dégâts');
        character.checkHealth();
        }

    get informations() {
        return this.name + ' a ' + this.health + ' points de vie';
    }
}

class Hero extends Character {
    constructor(name){
        super(name, 100, 15); 
    }

    heal() {
        console.log(this.name + ' se heal et gagne ' + (this.health += 40) + 'points de vie');
    }
}

class Monster extends Character {
    constructor(name) {
        super(name, 100, 20);
    }

    specialAttack(character) {
        character.health -= (this.attack * 2);
        console.log(this.name + ' fait une attaque spéciale et cause ' + this.attack * 2 + ' dégâts ' + ' à ' + character.name);
        character.checkHealth();
    }
}

let hero = new Hero (
    "Emeric"
)

let monster = new Monster (
    "Candice"
)


lifePlayerOne.textContent = hero.health;
lifePlayerTwo.textContent = monster.health;

attackPlayerOne.addEventListener('click', () => {
    hero.attackEnnemy(monster);
    lifePlayerTwo.textContent = monster.health;
});

attackPlayerTwo.addEventListener('click', () => {
    monster.attackEnnemy(hero);
    lifePlayerOne.textContent = hero.health;
});

healPlayerOne.addEventListener('click', () => {
    hero.heal();
    lifePlayerOne.textContent = hero.health;
});

specialPlayerTwo.addEventListener('click', () => {
    monster.specialAttack(hero);
    lifePlayerOne.textContent = hero.health;
});

let changeColor = text.fontcolor("green");

specialPlayerTwo.addEventListener('click', () => {
    lifePlayerOne.style.changeColor = 'orange'
});

document.getElementById('healPlayerOne').onclick = changeColor;
function changeColor() {
    document.body.style.color = "purple";
    return false;
}   