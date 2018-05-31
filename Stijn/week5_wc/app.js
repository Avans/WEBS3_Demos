
// $.ajax({
//     url: 'http://thecatapi.com/?id=6hs',
//     crossDomain: true,  
//     headers: {
//         'Access-Control-Allow-Origin': '*'
//     } 
// }).done(res => {
//     console.log(res);
// // });a


function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}

var $_$ = function(url){
    return {
        done: function(callback){

            sleep(5);
            var cat = "meow";
            //callback(cat);         
            return cat;
        }
    }
}

$('button').on('click', function(){
    alert('Hellu wurld!');
})
// $_$('cat.api').done(function(cat){
//     console.log("Callback met: " + cat);
// });

//api geef me user
    //geef me zijn games
        //geef details laatste game
            //geef opponents


var cat = $_$('cat.api').done();
console.log(cat);

Tick();

var counter = 1;
function Tick(){
    console.log(counter);
    counter++;
    setTimeout(() => {
        Tick();
    }, 1000);
}

GetCat({
    done: function(){
        
    }
})

function GetCat(options){
    options.done();
}