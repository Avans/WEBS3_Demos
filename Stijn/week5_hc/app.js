

console.log('test');

var api_key = '?api_key=Xhg1is981CIkO49JTOmbRFhACt09Z6Pv';

//game code
var api = new StrategoApi(api_key);
api.GetGames(function (games) {
    games.forEach(g => {
        var item = $('<li>');
        item.text("Me V.S " + g.opponent);
        $('#games').append(item);
    })
});;




function StrategoApi(key) {
    var self = this;

    var base = "https://strategoavans.herokuapp.com/api";

    self.GetGames = function (callback) {
        // Haal games op
        $.get(base + '/games' + key, function (games) {
            var result = [];
            games.forEach(g => {
                result.push(new Game(g));
            });

            callback(result);
        })

    }
}

function Game(game) {
    this.opponent = game.opponent;
    //Is dit vies? Of mag dit gewoon!

}
