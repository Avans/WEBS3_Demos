function BordView(controller)
{
    var game =  document.querySelector('#game');

    this.drawVakje = function(veld)
    {
        $('#' + veld.x + veld.y).text(veld.symbol);
    }

    this.draw = function(velden)
    {
        game.innerHTML = "";
        var bord = document.createElement("div");
        bord.className = "bord";

        var veldenViews = [];
        
        velden.forEach(v => {
            var veld =  document.createElement('div');
            veld.className = "veld";
            veld.id = "" + v.x + v.y;
            veld.style.left =  v.x * 100 + "px";
            veld.style.top =  v.y * 100 + "px";
            veld.onclick = function(){
                controller.placeSymbol(v);
            }
            bord.appendChild(veld);
        });

        game.appendChild(bord);
    }
}
