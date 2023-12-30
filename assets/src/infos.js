// nom, vitesse max, poids, motorisation, boîte de vitesse, transmission, moteur, 0-100

let modèles = {
    RE7B: ["RE-7B", "355 km/h", "880 kg", "Essence", "6 rapports", "Propulsion", "V8 biturbo", "3.4s"],
    Pinnacle: ["Pinnacle", "145 km/h", "1 300 kg", "Essence", "5 rapports", "Propulsion", "V6"],
    ElegyRH8: ["Elegy RH8", "317 km/h", "1500 kg", "Essence", "6 rapports", "Intégrale", "V6 biturbo"]
}

function infos(modèle) {
    let cap = modèles[modèle]

    var caract = document.querySelector('.caract');
    var titre = document.querySelector('.nommodele');
    var colonne1 = document.querySelector('.colonne1');
    var colonne2 = document.querySelector('.colonne2');

    caract.style.display = "block";
    titre.innerHTML = `${cap[0]}`;
    colonne1.innerHTML = `Vitesse de pointe : ${cap[1]} <br> Poids : ${cap[2]} <br> Moteur : ${cap[6]}`;
    colonne2.innerHTML = `Carburant : ${cap[3]} <br> Boîte de vitesses : ${cap[4]} <br> Transmission : ${cap[5]}`

}

document.getElementById('icon').addEventListener('click', function () {
    var caract = document.querySelector('.caract');
    
    caract.style.display = 'none';
});