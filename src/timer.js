class Timer {

    constructor(minutes, seconds) {
        this.seconds = Number(seconds) + (Number(minutes) * 60);
        this.timerId = null;
    }

    print() {
        let minutes = Math.floor(this.seconds / 60);
        return `Es sind noch ${minutes} Minuten und ${this.seconds - (minutes * 60)} Sekunden`;
    }

    stop() {
        clearInterval(this.timerId);
    }

    start() {
        this.timerId = setInterval(() => {
            if(this.seconds >= 0) {
                this.seconds -= 1;
            } else {
                this.stop();
            }
        }, 1000);
    }
}

updateTimerUI = function(timer) {
    let showText = document.getElementById("resultText");
    showText.value = timer.print();
}

startTimer = function() {
    const minutes = document.getElementById("startMinute").value;
    const seconds = document.getElementById("startSecond").value;

    const timer = new Timer(minutes, seconds);
    timer.start();

    setInterval(function () {
        updateTimerUI(timer)
    }, 1000);
}