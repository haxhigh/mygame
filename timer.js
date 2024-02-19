AFRAME.registerComponent('timer', {
    init: function () {
        var timerDur = 180
        const timerEl = document.querySelector("#timer")
        this.startTimer(timerDur,timerEl)
    },

    startTimer:function(timerDuration,timerElement){
        var minutes;
        var seconds;

        var timer = setInterval(countDown,1000)

        function countDown(){
            if(timerDuration >=0){
                minutes = parseInt(timerDuration / 60)
                seconds = parseInt(timerDuration % 60)

                if(minutes<10){
                    minutes = "0" + minutes;
                }
                if(seconds<10){
                    seconds = "0" + seconds;
                }

                timerElement.setAttribute("text",{
                    value:minutes + ":" + seconds
                })
                timerDuration -=1;
            }else{
                clearInterval(timer);
            }
        }
    }

});
