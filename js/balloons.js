let randAnimations = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing",
    "tada", "wobble", "jello", "heartBeat"];

function randSelect(randAnimations) {
    return "animate__animated animate__" + randAnimations[Math.floor((Math.random() * randAnimations.length))];
}
// console.log(randSelect(randAnimations));
$(function(){
    //$(h1).onload('append', randSelect);
    // $("attentionSeeker").on('load', function(){
        $("#attentionSeeker").addClass(randSelect(randAnimations));
    // })

    $("#submit").on('click', function () {
        //let yellowGo = ("#yellow").is(':checked');
        let yellowCheck = $('#yellow')[0].checked;
        let blueCheck = $('#blue')[0].checked;
        let greenCheck = $('#green')[0].checked;
        // let blueGo = ("#blue").is(":checked");
        // let greenGo = ("#green").is(":checked");
        // console.log(yellowCheck, greenCheck, blueCheck);
        if(yellowCheck == false && greenCheck == false && blueCheck == false){
            //$('#toast').toast({ autohide: false }).toast('show'); 
            $('#toast').toast({autohide: true}).toast('show');
        }
         
    });

    $("#checkAll").on('click', function(){
        let yellowCheck = $('#yellow')[0].checked;
        let blueCheck = $('#blue')[0].checked;
        let greenCheck = $('#green')[0].checked;

        if(yellowCheck == true && blueCheck == true && greenCheck == true){
            //yellowCheck = true;
            $('#yellow').prop('checked', false);
            $('#' + 'yellow' + 'Img').addClass('animate__animated animate__bounceOutUp');
            //blueCheck = true;
            $('#blue').prop('checked', false);
            $('#' + 'blue' + 'Img').addClass('animate__animated animate__bounceOutUp');
            //greenCheck = true;
            $('#green').prop('checked', false);
            $('#' + 'green' + 'Img').addClass('animate__animated animate__bounceOutUp');
        }
        else if (yellowCheck == false && blueCheck == false && greenCheck == false){
            yellowCheck = true;
            $('#yellow').prop('checked', true);

            $('#' + 'yellow' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
        
            //$('#' + 'yellow' + 'Img').addClass('animate__animated animate__bounceOutUp');
            blueCheck = true;
            $('#blue').prop('checked', true);
            // $('#' + 'blue' + 'Img').addClass('animate__animated animate__bounceOutUp');
            $('#' + 'blue' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
            greenCheck = true;
            $('#green').prop('checked', true);
            //$('#' + 'green' + 'Img').addClass('animate__animated animate__bounceOutUp');
            $('#' + 'green' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
        }

        else if (yellowCheck == true || blueCheck == true || greenCheck == true){
            // $('.form-check-input').each(function () {
            //     $(this).prop('checked', false);
            // });
            if(yellowCheck == false){
                yellowCheck = true;
                $('#yellow').prop('checked', true);
                $('#' + 'yellow' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
            };
            if(blueCheck == false){
                blueCheck = true;
                $('#blue').prop('checked', true);
                $('#' + 'blue' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
            };
            
            if(greenCheck == false){
                greenCheck = true;
                $('#green').prop('checked', true);
                $('#' + 'green' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
            }
        }

        // if(yellowCheck == false && blueCheck == false && greenCheck == false){
        //     yellowCheck = true;
        //     blueCheck = true;
        //     greenCheck = true;
        // }
        // else if(yellowCheck == true && blueCheck == false && greenCheck == false){
        //     blueCheck=true;
        //     greenCheck=true;
        // }
        // else if(yellowCheck == true && blueCheck == true && greenCheck == false){   
        //     greenCheck=true;
        // }
        
    });

    $(".form-check-label").mouseover(function (){
        if(this.getAttribute('for') == 'yellow'){
            $("#attentionSeeker").css('background-color', 'yellow');
        }
        if(this.getAttribute('for') == 'green'){
            $("#attentionSeeker").css('background-color', 'green');
        }
        if(this.getAttribute('for') == 'blue'){
            $("#attentionSeeker").css('background-color', 'blue');
        }
    }).mouseout(function () {
        if(this.getAttribute('for') == 'yellow'){
            $("#attentionSeeker").css('background-color', 'transparent');
        }
        if(this.getAttribute('for') == 'green'){
            $("#attentionSeeker").css('background-color', 'transparent');
        }
        if(this.getAttribute('for') == 'blue'){
            $("#attentionSeeker").css('background-color', 'blue');
        }
    });

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });     
});

