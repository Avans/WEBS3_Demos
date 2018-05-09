function BordView(controller)
{
    this.draw = function(velden)
    {
        var bord = document.createElement("div");
        bord.className = "bord";

        var veldenViews = [];
        
        velden.forEach(v => {
            var veld =  document.createElement('div');
            veld.className = "veld";
            veld.style.left =  v.x * 100 + "px";
            veld.style.top =  v.y * 100 + "px";
            veld.onclick = function(){
                controller.placeSymbol(v);
            }
            bord.appendChild(veld);
        });

        document.querySelector('#game').appendChild(bord);
    }
}







