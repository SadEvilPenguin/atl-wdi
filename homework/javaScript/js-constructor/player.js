console.log('player file is loaded');


var player = {
    name: "Neo",
    feedTamagotchi: function(tamagotchi) {
        tamagotchi.foodInTummy++;
        document.getElementById(tamagotchi.name).innerHTML = 'YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy';
    },
    medicateTamagotchi: function(tamagotchi) {
        tamagotchi.health++;
        document.getElementById(tamagotchi.name).innerHTML = tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health;
    },
    knockOutTamagotchi: function(tamagotchi) {
        tamagotchi.restedness++;
        document.getElementById(tamagotchi.name).innerHTML = tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness;
    }
}; //end player