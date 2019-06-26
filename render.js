const Renderer = function(){

    const render = function(frogs){
        $("#screen-middle").empty()
        for(let f of frogs){
            let frog = $(`<div class="frogs" id="${f.id}" style="top:${f.top}vh; left:${f.left}vh"></div>`)
            $("#screen-middle").append(frog)
        }
    }

    return{
        render
    }
}