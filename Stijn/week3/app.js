var canvas = document.querySelector('#bord');
var context = canvas.getContext('2d');

var bord = new Bord();
bord.draw(context);


var veld = {
    x: 3,
    y: 4
};

var waterveld = {
    isWater: true
}

waterveld.__proto__ = veld;

console.log(waterveld.x);

console.log({});
