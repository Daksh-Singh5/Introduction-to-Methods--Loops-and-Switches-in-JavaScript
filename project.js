function TableMaker() {
    var number = document.getElementById("num1");
    var No = number.value;

    document.getElementById("tableOutput").innerHTML = "";

    for (var i = 1; i < 21; i++) {
        document.getElementById("tableOutput").innerHTML += 
            (No + " X " + i + " = " + (No * i) + "<br>");
    }
}
