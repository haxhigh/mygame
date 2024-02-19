AFRAME.registerComponent('score', {
    schema: {
        elementID:{type:"string",default:"#coin"}
    },
    update:function(){
        this.isCollided(this.data.elementID)
    },
    isCollided:function(elementid){
        console.log(elementid)
        const element = document.querySelector(elementid)
        element.addEventListener("collide",(e)=>{
            console.log("collided")
            if(elementid.includes("#coin")){
                this.updateScore()
                console.log("hit coin")
            }else{
                console.log("hit")
            }
        })
    },
    updateScore:function(){
        var element = document.querySelector("#score")
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count)
        currentScore += 50
        element.setAttribute("text",{value:currentScore})
    }
});
