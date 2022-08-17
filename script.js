
var format12 = document.getElementById("12-hour")

function Time24() {
    var now = new Date();
    var hrs = now.getHours();
    var min = now.getMinutes();
    var seconds = now.getSeconds();
    if (!format12.checked)
    {
     hrs = hrs + 12
    }

    document.getElementById("time").innerHTML = `${hrs-12}:${min}:${seconds}`
    // console.log(`${hrs}:${min}:${seconds}`);
}
setInterval(Time24, 1000)

