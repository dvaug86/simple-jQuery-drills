
//this makes sure that the html has loaded before using jQuery
$(document).ready(function () {
    //button is disabled until something is imputed
    $('#btnSubmit').prop('disabled', true);




    $("#boxTxt").keyup(function () {
        if ($('#boxTxt').val() != '') {
            $('#btnSubmit').prop('disabled', false);
        }
    });

    $('body').append('<ul id="container"></ul>')
    
    
    $('#btnSubmit').click(function () {
        var boxTxt =$('#boxTxt').val();
        $('#container').append(`<li id="items"><h2 class="txtSize">${boxTxt}</h2></li>`);
        $("#myForm").trigger("reset");
        
        
    });
  
});

/*


    $('body').append('<div id="div4Txt"></div>').append('<ul id="container"></ul>').append('<li id="items"></li>').append(('<h2 class="txtSize"></h2>'));

$(document).ready(function () {
    //button is disabled without any characters
    $('#btnSubmit').prop('disabled', true);
    $('#textEntry').keyup(function () {
        if ($(this).val() != '') {
            $('#btnSubmit').prop('disabled', false);
        }
    });

    //adds a list to body of html
    $("body").append('<ul class="list"></ul>');

    //takes the value entered into field and places as a list item
    $('#btnSubmit').click(function() {
        let textValue = $('#textEntry').val();
        $('.list').append(`<li class="listItem">${textValue}</li>`);
        $('#textEntry').val('');
    });

    //function to select a random color
    function selectRandomColor() {
        let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randColor;
    }

    //assigns random color to list item
    $('.list').click(function (event) {
        let randomColor = selectRandomColor();
        $(event.target).css('color', randomColor);
    });

    //removes list item when double clicked
    $('.list').dblclick(function (event) {
        $(event.target).remove();
    });

});
*/