// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2: Break down the updateScore method, write a paragraph or comment how the function works line by line

// STEP 3:  Highlight the element that was clicked on using the CSS `background-color: yellow`
// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click the inner ring. What happens?



window.onload = function() {
    const body = document.body;
    const ring1 = document.querySelector('.ring-1');
    const ring2 = document.querySelector('.ring-2');
    const ring3 = document.querySelector('.ring-3');

    body.addEventListener('click', bullseyeGame.miss);
    ring1.addEventListener('click', bullseyeGame.outerRing);
    ring2.addEventListener('click', bullseyeGame.middleRing)
    ring3.addEventListener('click', bullseyeGame.innerRing)
}


const bullseyeGame = {
    score: 0,
    //selects element holding the score has a paramenter of points so when the function is called later by the event it will pass a # of points as the argument and add to total of points
    updateScore: function(points) {
        var scoreElement = document.querySelector('.score');
        this.score += points

        scoreElement.innerHTML = `${this.score} points`
    },

    miss: function(event) {
        let self = this;
        event.stopPropagation();
        //alert('YOU MISSED');
        bullseyeGame.updateScore(0);
        // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html element that was clicked
        self.style.backgroundColor = "yellow";
        setTimeout(function() {
            self.style.backgroundColor = "white";
        }, 2000);
    },
    outerRing: function(event) {
        let self = this;
        event.stopPropagation();
        //alert('outerRing was clicked');
        bullseyeGame.updateScore(10);
        self.style.backgroundColor = "yellow";
        setTimeout(function() {
            self.style.backgroundColor = "red";
        }, 2000);
    },
    middleRing: function(event) {
        let self = this;
        event.stopPropagation();
        //alert('middleRing was clicked');
        bullseyeGame.updateScore(50);
        self.style.backgroundColor = "yellow";
        setTimeout(function() {
            self.style.backgroundColor = "white";
        }, 2000);
    },
    innerRing: function(event) {
        let self = this;
        event.stopPropagation();
        //alert('innerRing was clicked');
        bullseyeGame.updateScore(100);
        self.style.backgroundColor = "yellow";
        setTimeout(function() {
            self.style.backgroundColor = "red"
        }, 2000);
    },
}