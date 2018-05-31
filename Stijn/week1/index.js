



var myButtons = document.querySelectorAll('button');


for(var i = 0; i < myButtons.length; i++)
{
    var b = myButtons[i];
    b.addEventListener('click', function(){
        MakeGreen(b);
    });
}


function MakeGreen(b){
    b.style.backgroundColor = 'green';
} 
