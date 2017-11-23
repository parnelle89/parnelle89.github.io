TimAllen.addEventListener("mousedown", toolTime, false);
TimAllen.addEventListener("touchstart", toolTime, false);
TimAllen.addEventListener("touchend", toolTime, false);

HailTim.addEventListener("mouseup", toolTime, false);
HailTim.addEventListener("touchstart", toolTime, false);
HailTim.addEventListener("touchend", toolTime, false);

function toolTime() {
    if (TimAllen.style.display != "none") {
        TimAllen.style.display = "none";
        HailTim.style.display = "inline-block";
        grunt();
    } else {

        HailTim.style.display = "none";
        TimAllen.style.display = "inline-block";

        if (DoubleTim.checked) {
            grunt();
        }
    }
}

function grunt() {
    if (ChkReverseGrunt.checked) {
        aeugh(ReverseGrunt.cloneNode());
    } else {
        aeugh(TimGrunt.cloneNode());
    }
}

function aeugh(newGrunt) {
    newGrunt.playbackRate = GruntSpeed.value;
    newGrunt.play();
}