
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
var squirtle = {
    name:'Squirtle',
    image: 'squirtle',
    wrong1:'Warturtle',
    correct:'Squirtle',
    wrong2:'Snivy',
}

var butterfree = {
    name:'butterfree',
    wrong1:'Venomoth',
    wrong2:'Beedrill',
    correct:'Butterfree'
}
var venonat = {
    name:'Venonat',
    wrong1:'Vileplume',
    wrong2:'Tangla',
    correct:'Venonat'
}


$('.getStarted').on('click', function(){
    
    counter = 4;
    correct = 0;
    incorrect = 0;
    counterStart();
    $('.pokemonImage').removeClass('venonat2');
    console.log('button clicked')
    
    activePokemon = vulpix;
    $('.stats').addClass('hide');
    timeOut();
    $(this).removeClass('block');
    $(this).addClass('hide');
    $('.pokemonImage').removeClass('hide');
    $('.question').removeClass('hide');
    $('.pokemonImage').addClass('vulpix');
    $('.pokemonImage').css('background-size', 'cover');
    $('li:first').text(vulpix.correct);
    $('li:first').addClass('correct');
    $('li:nth-of-type(2)').text(vulpix.wrong1);
    $('li:last').text(vulpix.wrong2);
    $('ol').removeClass('hide');
    $('li').off();

    $('li').on('click', function(){
  
        if ($(this).hasClass('correct')){
            clearTimeout(timeoutTimer);
            $('.pokemonImage').removeClass('vulpix');
            $('.pokemonImage').addClass('vulpix2');
            $('.question').text("Correct!");
            $('ol').addClass('hide');
            clearInterval(counterTimer);
            
            correct++;

        }else{
            wrong();
            incorrect++;
            
        }
        
        nextPokemon();
    })
    
    
})
function counterStart(){
    counterTimer = setInterval(function(){
    $('span').text(counter);
    counter--;
}, 1000)}

function timeOut() {
    timeoutTimer = setTimeout (function(){
    
    $('.question').text("Time's up! The answer was " + activePokemon.name + '.');
    $('ol').toggleClass('hide');
    incorrect++;
    counter  = 4;
    if(activePokemon == vulpix){
        $('.pokemonImage').removeClass('vulpix');
        $('.pokemonImage').addClass('vulpix2');
        nextPokemon();
    } else if (activePokemon == shaymin){
        $('.pokemonImage').removeClass('shaymin');
        $('.pokemonImage').addClass('shaymin2');
        thirdPokemon();
    } else if(activePokemon == squirtle) {
        $('.pokemonImage').removeClass('squirtle');
        $('.pokemonImage').addClass('squirtle2');
        fourthPokemon();
    } else if (activePokemon == butterfree){
        $('.pokemonImage').removeClass('butterfree');
        $('.pokemonImage').addClass('butterfree2');
        fifthPokemon();
    } else if (activePokemon == venonat){
        $('.pokemonImage').removeClass('venonat');
        $('.pokemonImage').addClass('venonat2');
        showstats();
    }
    clearInterval(counterTimer);
    }, 5000)
}
function wrong(){
    if (activePokemon == vulpix){
        $('.pokemonImage').removeClass('vulpix');
        $('.pokemonImage').addClass('vulpix2');
    } else if (activePokemon == shaymin){
        $('.pokemonImage').removeClass('shaymin');
        $('.pokemonImage').addClass('shaymin2');
    } else if (activePokemon == squirtle){
        $('.pokemonImage').removeClass('squirtle');
        $('.pokemonImage').addClass('squirtle2');
    } else if (activePokemon == butterfree){
        $('.pokemonImage').removeClass('butterfree');
        $('.pokemonImage').addClass('butterfree2');
    } else{
        $('.pokemonImage').removeClass('venonat');
        $('.pokemonImage').addClass('venonat2');
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
        $('.question').text("Who's That Pokemon?");
        $('.pokemonImage').removeClass('vulpix2');
        $('.pokemonImage').addClass('shaymin');
        $('.pokemonImage').css('background-size', 'cover');
        $('li:first').removeClass('correct');
        $('li:first').text(shaymin.wrong2);
        $('li:nth-of-type(2)').text(shaymin.wrong1);
        $('li:last').text(shaymin.correct);
        $('li:last').addClass('correct');
        $('ol').toggleClass('hide');
        $('li').off();
        

        $('li').on('click', function(){
         
            if ($(this).hasClass('correct')){
                clearTimeout(timeoutTimer);
                $('.pokemonImage').removeClass('shaymin');
                $('.pokemonImage').addClass('shaymin2');
                $('.question').text("Correct!");
                $('ol').toggleClass('hide');
                clearInterval(counterTimer);
                correct++;
    
            }else{
                wrong();
                incorrect++;
            }

            
            thirdPokemon();
    })
    
},5000)
}

function thirdPokemon(){
    activePokemon = squirtle;
    setTimeout (function(){
        counter = 4;
        counterStart();
        timeOut();
        $('.question').text("Who's That Pokemon?");
        $('.pokemonImage').removeClass('shaymin2');
        $('.pokemonImage').addClass('squirtle');
        $('.pokemonImage').css('background-size', 'cover');
        $('li:first').addClass('correct');
        $('li:last').removeClass('correct');
        $('li:first').text(squirtle.correct);
        $('li:nth-of-type(2)').text(squirtle.wrong2);
        $('li:last').text(squirtle.wrong1);
        $('ol').toggleClass('hide');
        $('li').off();

        $('li').on('click', function(){
           
            if ($(this).hasClass('correct')){
                clearTimeout(timeoutTimer);
                $('.pokemonImage').removeClass('squirtle');
                $('.pokemonImage').addClass('squirtle2');
                $('.question').text("Correct!");
                $('ol').toggleClass('hide');
                clearInterval(counterTimer);
                correct++;
    
            }else{
                wrong();
                incorrect++;
            }
            fourthPokemon();
    
    })
        

},5000)
}
function fourthPokemon(){
    activePokemon = butterfree;
    setTimeout (function(){
        counter = 4;
        counterStart();
        timeOut();
        $('.question').text("Who's That Pokemon?");
        $('.pokemonImage').removeClass('squirtle2');
        $('.pokemonImage').addClass('butterfree');
        $('.pokemonImage').css('background-size', 'cover');
        $('li:first').removeClass('correct');
        $('li:nth-of-type(2)').addClass('correct');
        $('li:first').text(butterfree.wrong2);
        $('li:nth-of-type(2)').text(butterfree.correct);
        $('li:last').text(butterfree.wrong1);
        $('ol').toggleClass('hide');
        $('li').off();

        $('li').on('click', function(){
        
            if ($(this).hasClass('correct')){
                clearTimeout(timeoutTimer);
                $('.pokemonImage').removeClass('butterfree');
                $('.pokemonImage').addClass('butterfree2');
                $('.question').text("Correct!");
                $('ol').toggleClass('hide');
                clearInterval(counterTimer);
                correct++;
    
            }else{
                wrong();
                incorrect++;
            }
            fifthPokemon();
    })

},5000)
}
function fifthPokemon(){
    activePokemon = venonat;
    setTimeout (function(){
        counter = 4;
        counterStart();
        timeOut();
        $('.question').text("Who's That Pokemon?");
        $('.pokemonImage').removeClass('butterfree2');
        $('.pokemonImage').addClass('venonat');
        $('.pokemonImage').css('background-size', 'cover');
        $('li:last').addClass('correct');
        $('li:nth-of-type(2)').removeClass('correct');
        $('li:first').text(venonat.wrong1);
        $('li:nth-of-type(2)').text(venonat.wrong2);
        $('li:last').text(venonat.correct);
        $('ol').toggleClass('hide');
        $('li').off();

        $('li').on('click', function(){
           
            if ($(this).hasClass('correct')){
                clearTimeout(timeoutTimer);
                $('.pokemonImage').removeClass('venonat');
                $('.pokemonImage').addClass('venonat2');
                $('.question').text("Correct!");
                $('ol').toggleClass('hide');
                clearInterval(counterTimer);
                correct++;
    
            }else{
                wrong();
                incorrect++;
                
            }
            
            showstats();
    })

},5000)
}

function showstats(){
    $('.stats').removeClass('hide');
    $('.correctAnswers').text('Correct: ' + correct);
    $('.incorrectAnswers').text('Incorrect: ' + incorrect);
    $('button').addClass('block');
    $('button').removeClass('hide').text('Restart?');
    pokemon = [];
    counter = 4;
    activePokemon;
    counterTimer;
    timeoutTimer;
    correct = 0;
    incorrect = 0;
}