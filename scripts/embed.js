function resize_iframes() {
    let iframes = document.querySelectorAll("iframe");

    for (let i = 0; i < iframes.length; i++) {
        iframes[i].style.display = "inline";

        iframes[i].style.width = "95%";

        let frameWidth = parseInt(iframes[i].clientWidth, 10);
        let frameHeight = Math.round(frameWidth * (9 / 16));
        iframes[i].style.height = frameHeight.toString(10) + "px";
    }
};

window.onload = resize_iframes;
window.onresize = resize_iframes;
