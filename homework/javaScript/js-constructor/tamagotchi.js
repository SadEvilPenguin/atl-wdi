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
        document.getElementById(this.name).innerHTML = `WAHH!!! -Food Left: ${this.foodInTummy}`;
    }
    puke() {
        this.health--;
        document.getElementById(this.name).innerHTML = `BlAHH!!! -Health left: ${this.health}`;
    }
    yawn() {
        this.restedness--;
        document.getElementById(this.name).innerHTML = `Yawn!!! -Current restedness of: ${this.restedness}`;
    }
    start() {
        let self = this;
        this.hungerTimer = setInterval(() => { self.cry() }, getRandom(5000, 10000));
        this.yawnTimer = setInterval(() => { self.yawn() }, getRandom(5000, 15000));
        this.sickTimer = setInterval(() => { self.puke() }, getRandom(15000, 25000));
    }
    stop() {
        let self = this;
        this.check = setInterval(() => {
            if (self.foodInTummy <= 0 || self.restedness <= 0 || self.health <= 0) {
                clearInterval(self.hungerTimer);
                clearInterval(self.yawnTimer);
                clearInterval(self.sickTimer);
                document.getElementById(self.name).innerHTML = `${self.name} has died!`;
                document.getElementsByClassName(self.name)[0].childNodes[0].setAttribute("src", "./img/tama_dead.gif");
                clearInterval(self.check);
            }
        }, 1000);
    }
};

function getRandom(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);
    return random;
}

function createTama(id, type) {
    let tama = document.createElement('div');
    tama.setAttribute("class", id);
    document.getElementById('tama').appendChild(tama);
    let pic = document.createElement('img');
    pic.setAttribute("src", "./img/tama.gif");
    let name = document.createElement('p');
    name.appendChild(document.createTextNode(`${id} the ${type}`));
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
    this[name].stop();
    createTama(name, creature);
}

//test out your Tamagotchies below via console.logs