let jugadores = ["Musso", "Molina", "Pezzella", "Otamendi", "Acuña", "DiMaria", " DePaul", "Paredes", "Gomez", "Messi", "Martinez", "Moreno", "Vaca", "Villaroel", "Justiniano", "Saavedra", "Sagredo", "Quinteros", "Haquin", "Jusino", "Sagredo", "Lampe" ];

jugadores.sort((a,b) => {
    a = a.length;
    b = b.length;
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1
    } else {
    return 1
    }
})

console.log(jugadores);
