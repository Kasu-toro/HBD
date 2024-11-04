document.addEventListener("DOMContentLoaded", function () {
    const candlesContainer = document.getElementById("candles-container");
    const audio = new Audio('bdaysex.mp3');

    const candles = candlesContainer.querySelectorAll(".candle");
    const layerWidth = 250;
    const layerHeight = 100;

    candles.forEach((candle, i) => {

        const randomLeft = Math.random() * (layerWidth - 12) + 5;
        const randomTop = Math.random() * (layerHeight - 40) - 20;

        candle.style.left = `${randomLeft}px`;
        candle.style.top = `${randomTop}px`;
    });

    document.getElementById("playButton").addEventListener("click", function() {
        candles.forEach(candle => {
            candle.classList.add("out");
        });
        audio.play();
    });
});
