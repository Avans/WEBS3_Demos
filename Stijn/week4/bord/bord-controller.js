function BordController()
{
    var self = this;

    var myTurn = true;

    function init()
    {
        self.model = new Bord();
        self.view = new BordView(self);
        self.view.draw(self.model.velden);
    }

    self.placeSymbol = function(veld)
    {
        //self.model.zetVakje(veld); //model out of sync!!!
        if (!veld.symbol) {
            veld.symbol = getSymbol();
            self.view.drawVakje(veld);
            myTurn = !myTurn;
        }
    }

    function getSymbol(){
        return myTurn ? '🙈' : '🐱';
    }

    init();
}