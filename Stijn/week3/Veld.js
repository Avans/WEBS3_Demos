function Veld(x, y)
{
    var x = x * 50 + 20;
    var y = y * 50 + 20;

    this.draw = function(ctx)
    {
        ctx.rect(x, y, 50,50);
        ctx.stroke();
    }
}

function WaterVeld()
{
    this.draw = function(ctx)
    {
        ctx.rect(x, y,50,50);
        ctx.fillStyle="#eee";
        ctx.stroke();
    }
}

WaterVeld.prototype = Veld;

function GewoonVeld()
{

}