function modify () {
    var d = document.lastModified;
    document.getElementById("date").innerHTML = d;
}

var d = new Date();
document.getElementById("date").innerHTML = d;