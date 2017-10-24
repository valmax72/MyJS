var heure= Number(prompt("heure :"));
var minute= Number(prompt("minute :"));
var seconde= Number(prompt("seconde :"));

if ( (heure >= 0) && (heure <= 23) &&
    (minute >= 0) && (minute <= 59) &&
    (seconde >= 0) && (seconde <= 59) ){
    seconde ++;
    if (seconde ==60){
        seconde=0;
        minute++;
        if (minute==60){
            minute=0;
            heure++;
            if (heure==24) {
                heure=0;
            }
        }
    }
    alert("1 seconde plustard il sera : " +heure + "h " + minute + "m " + seconde + "s ");
    console.log(heure + "h " + minute + "m " + seconde + "s ");
} else {
    alert("Votre heure n'est pas bonne")
}