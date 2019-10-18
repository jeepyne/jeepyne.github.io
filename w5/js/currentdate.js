const options = {weekday: "long", day:"numeric", month: "long", year:"numeric"};
document.getElementById("currentdate").textcontent = new Date().toLocaleDateString("en-us",options);

var d = new Date();
document.getElementById("date").innerHTML = d;