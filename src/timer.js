class Timer {

    constructor(minutes, seconds) {
        this.seconds = Number(seconds) + (Number(minutes) * 60);
        console.log(this.seconds);
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
        this.timerId = setInterval(function () {
            this.seconds -= 1;
        }, 1000);
    }
}

startTimer = function() {
    const minutes = document.getElementById("startMinute").value;
    const seconds = document.getElementById("startSecond").value;

    const timer = new Timer(minutes, seconds);
    timer.start();
    let showText = document.getElementById("resultText");
    showText.value = timer.print();
}