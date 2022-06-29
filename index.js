function createTimer(num) {
    let timer = setInterval(() => {
        console.log(num);
        num--;
        if (num === 0) {
        clearInterval(timer);
        }
    }, 1000);
}


createTimer(5);
