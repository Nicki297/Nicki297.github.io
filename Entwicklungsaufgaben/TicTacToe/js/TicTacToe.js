const ANZAHL_ZELLEN = 4; // erweitern bei mehr Zellen von 4 auf 9 
let werIstAmZug = 0;
for (let i = 0; i < ANZAHL_ZELLEN; i++) {
    document.getElementById(i).addEventListener('click', meinKlick);
}
function meinKlick() {
    let gewaehlteId = event.target.id; // welche Zelle wurde gewählt? 
    if (werIstAmZug == 0) {
    document.getElementById(gewaehlteId).src = "images/o.png";
    werIstAmZug = 1;
}
else {
    document.getElementById(gewaehlteId).src = "images/x.png"; 
    werIstAmZug = 0;
} }