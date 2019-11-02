var temp = parseFloat(document.getElementsByClassName("high").innerhtml);
var speed = parseFloat (document.getElementsByClassName("speed").innerhtml);
var chill = windChill (temp, speed);


document.getElementsByClassName("windChill").innerhtml = chill;

function windChill (temp, speed) {
    var f = "NaN";
    if (temp <= 50 && speed > 3){
        f= 32.74 + (0.6215 * temp)-(35.75 * Math.pow(speed, 0.16)) + (0.4275 + temp + Math.pow (speed, 0.16));
    }
    return f;
}