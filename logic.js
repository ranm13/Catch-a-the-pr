const Data = function(){
    const _frogs = []
    
    //get's a random number, in use for the location of the frogs
    const getRandomInt = function(max, min) {
        return (Math.floor(Math.random() * Math.floor(max)) + Math.floor(min));
    }

    //returns the list of frogs objects
    const getFrogs = () => _frogs

    let frogCounter = 0 //for giving an id to the frogs

    let level = 1 

    let time = 6
    
    let startText = "Start"

    let endText = ""
    
    let score = 0

    const getLevel = () => level

    const getTime = () => time

    const getStartText = () => startText
    
    const getEndText = () => endText

     //function for fiding frogs by ID
    const findAFrog = function(frogId){
        for(let index in _frogs){
            if(_frogs[index].id === frogId){
                return index
            }
        }
    }

    //function for adding frogs in random locations
    const addFrog = function(){
        for(let i = 0; i < level; i++){
        frogCounter ++
        _frogs.push({id: `f${frogCounter}`, top: `${getRandomInt(63, 6)}` , left: `${getRandomInt(93, 0)}`, color: `rgb(${getRandomInt(255, 0)},${getRandomInt(100, 0)},${getRandomInt(255, 0)})` })
        }
    }
    
    //function for removing frogs 
    const removeFrog = function(frogId){
        let index = findAFrog(frogId)
        score += Math.floor((1 /_frogs[index].top) * 10000)
        _frogs.splice(index, 1)
        
    }

    //timer for countdown during the levels of the game
    const timer = function(){
        const t = setInterval(function(){
            time -= 1
            if(time <= 0){
                clearInterval(t)
            }

        }, 1000)   
    }

    //function for passing a level
    const passALevel = function(){
        level++
        time = 2 + level
    }

    //start game function
    const startGame = function(){
        endText = ""
        startText = "Catch the frogs!"
        addFrog()
        timer()
        
    }
    //reseting every elemnts that are important to start the game again
    const gameOver = function(){
        level = 0
        time = 3
        _frogs.splice(0)
        startText = "Start"
        endText = `Alas, no more froggies for you! <br> Your score is ${score}`
        score = 0
    }


    return{
        getFrogs,
        addFrog,
        removeFrog,
        timer,
        passALevel,
        getLevel,
        getTime,
        gameOver,
        getStartText,
        startGame,
        getEndText
    }
}

