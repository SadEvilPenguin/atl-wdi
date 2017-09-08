// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

function makeChange(price, payment, denominations) {
    let change = parseInt((payment - price) * 100);
    console.log(change);
    //create Array and remainder after coin
    let coinArray = [];
    let coin = 0;
    let remainder = 0;
    denominations.forEach(function(element) {
        coin = Math.trunc(change / element);
        coinArray.push(coin);
        change = change % element;
    });

    if (change !== 0) {
        console.log(`please make sure to add penny at end of coins array otherwise you will have ${change} remaining`)
    }
    return coinArray;
}


/* var makeChange = function(price, payment) {
    let change = (payment - price)*100;
    if (change <= 0) {
      return [0,0,0,0];
    } else {
      const quarters = Math.floor(change / 25);
      chang = change % 25;
      const dimes = Math.floor(change / 10);
      chang = change % 10;
      const nickels = Math.floor(change / 5);
      chang = change % 5;
      const pennies = Math.floor(change / 1);
      chang = change % 1;
      return [quarters, dimes, nickels, pennies];
    }
}

*/
/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
    makeChange: makeChange
};