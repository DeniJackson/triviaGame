var pokemon = [];
var counter = 4;
var activePokemon;
var counterTimer;
var timeoutTimer;
var vulpix = {
    name:'vulpix',
    image:'vulpix',
    correct:'Vulpix',
    wrong1: 'Growlithe',
    wrong2: 'Ninetales'
}
var shaymin = {
    name:'Shaymin',
    image: 'shaymin',
    wrong1:'Shinx',
    correct:'Shaymin',
    wrong2:'Eevee',
}




$('.getStarted').on('click', function(){
    counterStart();
    
    timeOut();
    activePokemon = vulpix;
    

    $(this).toggleClass('block');
    $(this).toggleClass('hide');
    $('.pokemonImage').toggleClass('hide');
    $('.question').toggleClass('hide');
    $('.pokemonImage').addClass('vulpix')
    $('.pokemonImage').css('background-size', 'cover');
    $('li:first').append(vulpix.correct);
    $('li:first').addClass('correct')
    $('li:nth-of-type(2)').append(vulpix.wrong1);
    $('li:last').append(vulpix.wrong2);
    $('ol').toggleClass('hide');

    $('li').on('click', function(){
        console.log(this + 'clicked');
        if ($(this).hasClass('correct')){
            clearTimeout(timeoutTimer);
            $('.pokemonImage').removeClass('vulpix');
            $('.pokemonImage').addClass('vulpix2');
            $('.question').text("Correct!");
            $('ol').toggleClass('hide');
            clearInterval(counterTimer);
            nextPokemon();

        }else{
            wrong();
            nextPokemon();
        }
    })
    
    
})
function counterStart(){
    counterTimer = setInterval(function(){
    $('span').text(counter);
    counter--;
}, 1000)}

function timeOut() {
    timeoutTimer = setTimeout (function(){
    $('.pokemonImage').removeClass('vulpix');
    $('.pokemonImage').addClass('vulpix2');
    $('.question').text("Time's up!");
    $('ol').toggleClass('hide');
    clearInterval(counterTimer);
    if(activePokemon == vulpix){
        nextPokemon();
    }

    }, 5000)
}
function wrong(){
    if (activePokemon == vulpix){
        $('.pokemonImage').removeClass('vulpix');
        $('.pokemonImage').addClass('vulpix2');
    } else if (activePokemon == shaymin){
        $('.pokemonImage').removeClass('shaymin');
        $('.pokemonImage').addClass('shaymin2');
    }
         
        $('.question').text("Wrong answer! It was " + activePokemon.name +'.');
        $('ol').toggleClass('hide');
        clearInterval(counterTimer);
        clearTimeout(timeoutTimer);
}

function nextPokemon(){
    activePokemon = shaymin;
    setTimeout (function(){
        counter = 4;
        counterStart();
        timeOut();
        $('.question').text("Who's That Pokemon?")
        $('.pokemonImage').addClass('shaymin')
        $('.pokemonImage').css('background-size', 'cover');
        $('li:first').removeClass('correct')
        $('li:first').text(shaymin.wrong2);
        $('li:nth-of-type(2)').text(shaymin.wrong1);
        $('li:last').text(shaymin.correct);
        $('li:last').addClass('correct')
        $('ol').toggleClass('hide');
        $('li').off();

        $('li').on('click', function(){
            console.log(this + 'clicked');
            if ($(this).hasClass('correct')){
                clearTimeout(timeoutTimer);
                $('.pokemonImage').removeClass('shaymin');
                $('.pokemonImage').addClass('shaymin2');
                $('.question').text("Correct!");
                $('ol').toggleClass('hide');
                clearInterval(counterTimer);
    
            }else{
                wrong();
            }
    
    })

},5000)
}


