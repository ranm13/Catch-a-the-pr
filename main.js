const d = Data()
const r = Renderer()

r.render(d.getFrogs(), d.getLevel(), d.getTime(), d.getStartText(), d.getEndText())

//removes a frog by clicking on it
$("#screen-middle").on("click", ".frogs", function(){
    const frogId = $(this).attr("id")
    d.removeFrog(frogId)
    r.render(d.getFrogs(), d.getLevel(), d.getTime(), d.getStartText(), d.getEndText())
})


//click starts the game  and the setInterval controls the flow of the game
$("#game-starter").on("click", function(){
    d.startGame()
    r.render(d.getFrogs(), d.getLevel(), d.getTime(), d.getStartText(), d.getEndText())
    const t = setInterval(function(){
        r.render(d.getFrogs(), d.getLevel(), d.getTime(), d.getStartText(), d.getEndText())
        if(d.getTime() === 0){
            d.gameOver()
            r.render(d.getFrogs(), d.getLevel(), d.getTime(), d.getStartText(), d.getEndText())
            clearInterval(t)
        }
        else if(d.getFrogs().length === 0){
            d.passALevel() 
            d.addFrog()
            r.render(d.getFrogs(), d.getLevel(), d.getTime(), d.getStartText(), d.getEndText(), true)
        }

    }, 1000)
})

