const d = Data()
const r = Renderer()

r.render(d.getFrogs())

//frogs appear automaticlly


//removes a frog by clicking on it
$("#screen-middle").on("click", ".frogs", function(){
    const frogId = $(this).attr("id")
    d.removeFrog(frogId)
    r.render(d.getFrogs())
})