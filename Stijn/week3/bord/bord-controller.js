function BordController()
{
    var self = this;

    function init()
    {
        self.model = new Bord();
        self.view = new BordView(self);
        self.view.draw(self.model.velden);
    }

    self.placeSymbol = function(veld)
    {
        console.log(veld);
    }

    init();
}