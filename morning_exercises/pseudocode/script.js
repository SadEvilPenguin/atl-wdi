//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total) {
    let smallPrice = 60;
    total = total - (60 * small);
    return total / large;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon) {
    let curcumference = 24901;
    let totalGallons = 24901 / milesPerGallon;
    return totalGallons * fuelPrice;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d) {
    let costco = a * (b / 100);
    let kirkland = c * (d / 100);
    let juiceTotal = costco + kirkland;
    let total = a + c;
    return juiceTotal / total;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
    barrels: barrels,
    shipFuelCost: shipFuelCost,
    calcFruitJuice: calcFruitJuice
};