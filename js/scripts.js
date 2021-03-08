function openNav(){
    var x = document.getElementById("nav");

    if(x.className === "navigation"){
        x.className += " menujs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    }
    else{
        x.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }
}