var days = ['Monday', 'Tuesday', 'Wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
setInterval(function () {
    var a = new Date();
    var str = "".concat(Math.abs(a.getHours() - 12), " : ").concat(a.getMinutes(), " : ").concat(a.getSeconds());
    var str2 = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear();
    var str3 = days[a.getDay() - 1];
    document.getElementById("time").innerHTML = str + " on " + str2;
    document.getElementById("day").innerHTML = str3;
}, 1000);
var hours = 0;
var minute = 0;
var second = 0;
document.getElementById("reset").disabled = true;
document.getElementById("stop").disabled = true;
var resetSW = function () {
    document.getElementById("reset").disabled = true;
    hours = 0;
    minute = 0;
    second = 0;
    document.getElementById("stopwatch").innerHTML = "".concat(hours, " : ").concat(minute, " : ").concat(second);
};
var stopSW = function () {
    document.getElementById("reset").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    clearInterval(intr);
};
var intr;
var startSW = function () {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    intr = setInterval(function () {
        second++;
        if (second >= 60) {
            second = 0;
            minute++;
        }
        if (minute >= 60) {
            minute = 0;
            hours++;
        }
        document.getElementById("stopwatch").innerHTML = "".concat(hours, " : ").concat(minute, " : ").concat(second);
    }, 1000);
};
