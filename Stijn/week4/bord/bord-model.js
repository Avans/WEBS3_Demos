function Bord()
{
    this.velden = [];

    var myTurn = true;

    for(var x = 0; x < 3; x ++)
    {
        for(var y = 0; y < 3; y++)
        {
            this.velden.push(new Veld(x, y));
        }
    }
}

function Veld(x, y)
{
    this.x = x;
    this.y = y;
}