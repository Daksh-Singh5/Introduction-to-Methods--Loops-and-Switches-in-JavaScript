var good = "HaPpY BirThDAy"

document.write(good.toUpperCase())
document.write("<br>")
document.write(good.toLowerCase())
document.write("<br>")
document.write(good.startsWith("H"))
document.write("<br>")
document.write(good.endsWith("Y"))

document.write("<br>")

var No = 7
for (i = 1; i < 21; i++) {
    document.write(No + "X" + i + "=" + No * i);

    document.write("<br>")
}

var dayname;
var numberofdays =new Date().getDay()

switch (numberofdays) {

    case 0:
        dayname = "sunday";
        break;
    case 1:
        dayname = "monday";
        break;
    case 2:
        dayname = "tuesday";
        break;
    case 3:
        dayname = "wednesday";
        break;
    case 4:
        dayname = "thursday";
        break;
    case 5:
        dayname = "friday";
        break;
    case 6:
        dayname = "saturday";
        break;
}
document.write( "today's date is :"+dayname)



