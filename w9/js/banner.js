function pancakes () {
    let d = date();
    let names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayname = names [d.getDay()];

    if (dayname == "Friday"){
        document.getElementById("pancakes").innerHTML = "Friday is Pancakes in the Park! 9:00am at the city park pavilion."
    }
    else {document.getElementById("pancakes").style.display = "none";}
    }
