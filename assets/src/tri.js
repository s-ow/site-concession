function afficherEtatCheckbox() {
    var boutons = document.querySelectorAll('.bouton');

    boutons.forEach(function (bouton) {
        var Berlines = document.querySelectorAll('.Berlines');
        var Sportives = document.querySelectorAll('.Sportives');
        var Course = document.querySelectorAll('.Course');

        var checkbox = bouton.querySelector('input');

        var label = bouton.querySelector('label').innerText;
        var etat = checkbox.checked ? 'coché' : 'décoché';

        if (label == "Berlines" && etat == "décoché") {
            Berlines.forEach(function (Berlines) {
                Berlines.style.display = 'none';
            });
        } else if (label == "Berlines" && etat != "décoché") {
            Berlines.forEach(function (Berlines) {
                Berlines.style.display = 'block';
            });
        }

        if (label == "Sportives" && etat == "décoché") {
            Sportives.forEach(function (Sportives) {
                Sportives.style.display = 'none';
            });
        } else if (label == "Sportives" && etat != "décoché") {
            Sportives.forEach(function (Sportives) {
                Sportives.style.display = 'block';
            });
        }

        if (label == "Course" && etat == "décoché") {
            Course.forEach(function (Course) {
                Course.style.display = 'none';
            });
        } else if (label == "Course" && etat != "décoché") {
            Course.forEach(function (Course) {
                Course.style.display = 'block';
            });
        }
    });
}

window.onload = function () {
    afficherEtatCheckbox();
};

document.querySelectorAll('.bouton input').forEach(function (checkbox) {
    checkbox.addEventListener('change', afficherEtatCheckbox);
});