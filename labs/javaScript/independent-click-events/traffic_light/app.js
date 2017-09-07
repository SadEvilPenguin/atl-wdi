window.onload = function() {
    //selects stop button adds to variable
    var stopButton = document.querySelector('#stopButton');
    //selects slow button adds to variable
    var slowButton = document.querySelector('#slowButton');
    //selects go button adds to variable
    var goButton = document.querySelector('#goButton');

    //selects stop light adds to variable
    var stopLight = document.querySelector('#stopLight');
    //selects slow light adds to variable
    var slowLight = document.querySelector('#slowLight');
    //selects go light adds to variable
    var goLight = document.querySelector('#goLight');

    //addes listend to stop button when user clicks on it runs function
    stopButton.addEventListener('click', trafficLight.illuminateRed);
    //addes listend to slow button when user clicks on it runs function
    slowButton.addEventListener('click', trafficLight.illuminateYellow);
    //addes listend to go button when user clicks on it runs function
    goButton.addEventListener('click', trafficLight.illuminateGreen);
}

//trafficLight object that contains the functions for the stop, slow , and go lights plus clears the others.
var trafficLight = {
    illuminateRed: function(event) {
        trafficLight.clearLights();
        stopLight.style.background = 'red';
    },

    illuminateYellow: function(event) {
        trafficLight.clearLights();
        slowLight.style.background = 'yellow';
    },

    illuminateGreen: function(event) {
        trafficLight.clearLights();
        goLight.style.background = 'green';
    },

    clearLights: function() {
        stopLight.style.background = 'black';
        slowLight.style.background = 'black';
        goLight.style.background = 'black';

    }
}