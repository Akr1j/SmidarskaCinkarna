function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
        x.style.width = "0px";
        x.style.opacity = "0";
    } else {
        x.style.visibility = "visible";
        x.style.width = "100%";
        x.style.opacity = "1";
    }
}