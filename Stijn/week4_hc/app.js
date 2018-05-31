
$(function () {
    $('#game').on('mouseenter', '.disco-tegel', function () {
        $(this).css('background-color', getRandomColor());
    }).on('mouseleave', '.disco-tegel', function () {
        $(this).css('background-color', '#2e2e2e');
    })

    $('#add').on('click', function(){
        var tegel = $('<div>').addClass('disco-tegel')
        $('#game').append(tegel);
    })

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }
 
});

