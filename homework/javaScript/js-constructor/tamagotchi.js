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
}

//create new Tamagotchis
const tammy = new Tamagotchi("tammy", "Dragon");
const tommy = new Tamagotchi("tommy", "cat");

//test out your Tamagotchies below via console.logs

tammy.cry();
tommy.cry();