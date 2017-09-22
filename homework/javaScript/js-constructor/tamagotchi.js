console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchis {
    constructor(value) {
        this.propertyName = value;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry() {
        this.foodInTummy--;
        console.log(`Food Left: ${this.foodInTummy}`, 'WAHH!!!');
    }
}

//create new Tamagotchis
const tammy = new Tamagotchis();
const tommy = new Tamagotchis();

//test out your Tamagotchies below via console.logs

tammy.cry();
tommy.cry();