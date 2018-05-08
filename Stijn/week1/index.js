



var mijnButtons = document.querySelectorAll('button');


for(var i = 0; i < mijnButtons.length; i++)
{
    var b = mijnButtons[i];
    b.addEventListener('click', function(){
        MakeGreen(b);
    });
}


function MakeGreen(b){
    b.style.backgroundColor = 'green';
} 
