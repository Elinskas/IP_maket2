function tic() {
    const now = new Date();
    const elapsed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const remain  = 86400 - elapsed;

    const h = Math.floor(remain / 3600);
    const m = Math.floor((remain % 3600) / 60);
    const s = remain % 60;

    const timer = document.getElementById('timer');
    if (timer) {
        timer.textContent = ('0' + h).slice(-2) + ':' +
                            ('0' + m).slice(-2) + ':' +
                            ('0' + s).slice(-2);
    }
}

tic();
setInterval(tic, 1000);