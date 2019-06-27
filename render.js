const Renderer = function(){

    const render = function(frogs, level, time, start, endText, isNewGame = false){
        $("#screen-middle").empty()
        for(let f of frogs){
            let frog = $(`<div class="frogs" id="${f.id}" style="top:${f.top}vh; left:${f.left}vw; color:${f.color}; font-size:${f.top * 0.1}em ;"><i class="fas fa-frog"></i></div>`)
            $("#screen-middle").append(frog)
        }
        $("#game-starter").text(start)
        $("#screen-top").text(`Seconds left- ${time || 0}`)
        $("#level").text(`Level- ${level || 0}`)
        $("#frogs-left").text(`Frogs left- ${frogs.length}`)
        $("#screen-middle").append(`<div id="end-messege" class="game-text"></div>`)
        $("#end-messege").html(endText)
            
        // if a new game starts the seconds left text will flash in yellow
        if(isNewGame){
            setTimeout(function(){
                $("#screen-top").css("color", "rgb(0, 0, 0)")
            }, 1000) 
            $("#screen-top").css("color", "rgb(255, 255, 0)")
        }

        //if there is less then three seconds left the timer should flash in red
        if(time <= 3){
            setTimeout(function(){
                $("#screen-top").css("color", "rgb(0, 0, 0)")
                }, 500) 
                $("#screen-top").css("color", "rgb(225, 0, 0)")
            }
        }
    return{
        render
    }
}