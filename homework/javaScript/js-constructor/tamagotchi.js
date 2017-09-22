console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creature) {
        this.propertyName = name;
        this.creatureType = creature;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry() {
        this.foodInTummy--;
        console.log(`${this.propertyName} says WAHH!!!`);
    }
    puke() {
        this.foodInTummy--;
        console.log(`Food left: ${this.foodInTummy}  WAHH!!!`);
    }
    yawn() {
        this.restedness--;
        console.log(`${this.propertyName} has current restedness of: ${this.restedness}`);
    }
}

//create new Tamagotchis
const tammy = new Tamagotchi("tammy", "Dragon");
const tommy = new Tamagotchi("tommy", "cat");

//test out your Tamagotchies below via console.logs

tammy.cry();
tammy.puke();
tammy.yawn();
tommy.cry();
tommy.puke();
tommy.yawn();