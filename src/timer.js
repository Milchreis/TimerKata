class Timer {

    constructor(minutes, seconds) {
        this.seconds = seconds + minutes * 60;
        this.timerId = null;
    }

    print() {
        let minutes = this.seconds / 60;
        return `Es sind noch ${minutes} Minuten und ${this.seconds - (minutes * 60)} Sekunden`;
    }

    stop() {
        clearInterval(this.timerId);
    }

    start() {
        this.timerId = setInterval(function () {
            this.seconds -= 1;
        }, 1000);
        
    }
}

startTimer = function() {
    const minutes = document.getElementById("startMinute").value;
    const seconds = document.getElementById("startSecond").value;

    const timer = new Timer(minutes, seconds);
    timer.start()
}