

function Bord(naam)
{
    this.naam = naam;

    var velden = [];

    var myTurn = true;

    for(var x = 0; x < 3; x ++)
    {
        for(var y = 0; y < 3; y++)
        {
            velden.push(new Veld(x, y));
        }
    }

    this.draw = function(ctx)
    {
        ctx.rect(20,20,150,150);
        ctx.stroke();
        velden.forEach(function(veld)
        {
            veld.draw(ctx);
        });
    }
}