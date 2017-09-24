console.log('tamagotchi file is loaded');


//your class declaration here
class Tamagotchi {
    constructor(name, creature) {
        this.name = name;
        this.creatureType = creature;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry() {
        this.foodInTummy--;
        document.getElementById(this.name).innerHTML = `WAHH!!! Food Left: ${this.foodInTummy}`;
    }
    puke() {
        this.health--;
        document.getElementById(this.name).innerHTML = `BlAHH!!! Health left: ${this.health}`;
    }
    yawn() {
        this.restedness--;
        document.getElementById(this.name).innerHTML = `has current restedness of: ${this.restedness}`;
    }

    start() {
        let self = this;
        this.hungerTimer = setInterval(() => { self.cry() }, 6000);
        this.yawnTimer = setInterval(() => { self.yawn() }, 10000);
        this.sickTimer = setInterval(() => { self.puke() }, 20000);
    }
    stop() {
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
    }
};

function createTama(id) {
    let tama = document.createElement('div');
    tama.setAttribute("class", id);
    document.getElementById('tama').appendChild(tama);
    let pic = document.createElement('img');
    pic.setAttribute("src", "./img/tama.gif");
    let name = document.createElement('p');
    name.appendChild(document.createTextNode(id));
    tama.appendChild(pic);
    tama.appendChild(name);
    let tamaSay = document.createElement('div');
    tamaSay.setAttribute("class", id);
    let say = document.createElement('span');
    say.setAttribute("id", id);
    tamaSay.appendChild(document.createTextNode(`${id} says: `));
    tamaSay.appendChild(say);
    document.getElementById('say').appendChild(tamaSay);

};

//create new Tamagotchis
let create = (name, creature) => {
    this[name] = new Tamagotchi(name, creature);
    this[name].start();
    createTama(name);
}

//test out your Tamagotchies below via console.logs