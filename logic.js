const Data = function(){
    const _frogs = [{id:`f0`,
top: 50,
left: 50}]
    
    const getRandomInt = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    //returns the list of frogs objects
    const getFrogs = () => _frogs

    let frogCounter = 0 //for giving an id to the frogs

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
        frogCounter ++
        _frogs.push({id: `f${frogCounter}`, top: `${getRandomInt(74)}` , left: `${getRandomInt(97.5)}`})

    }
    
    //function for removing frogs 
    const removeFrog = function(frogId){
        let index = findAFrog(frogId)
        return _frogs.splice(index, 1)
    }

    //timer for countdown during the levels of the game
    const timer = function(time){
        const t = setInterval(function(){
            if(time === 0){
                alert("You Lost!")
                clearInterval(t)
            }
            console.log(time)
            time -= 1
            }, 1000)
            
        
    }
    return{
        getFrogs,
        addFrog,
        removeFrog,
        timer
    }
}