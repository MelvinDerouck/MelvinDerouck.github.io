// Initialisation des mots
var words = ["a Data Enthusiast", "a Data Analyst", "ready to help You!"];
var i = 0;
var typingSpeed = 100; // Vitesse de frappe
var deletingSpeed = typingSpeed / 3; // Vitesse d'effacement, 3 fois plus rapide

function typeEffect() {
    var word = words[i].split("");
    var typingEffect = setInterval(function() {
        if (!word.length) {
            clearInterval(typingEffect);
            setTimeout(deleteEffect, 1000); // Attendre 1000ms avant de commencer à effacer
            return;
        }
        var char = word.shift();
        $("#dynamic-text").append(char);
    }, typingSpeed);
}

function deleteEffect() {
    var word = $("#dynamic-text").text();
    var deletingEffect = setInterval(function() {
        if (!word.length) {
            clearInterval(deletingEffect);
            i = (i + 1) % words.length;
            setTimeout(changeWord, 500); // Temps avant de changer de mot
            return;
        }
        word = word.slice(0, -1); // Enlever un caractère
        $("#dynamic-text").text(word);
    }, deletingSpeed);
}

function changeWord() {
    $("#dynamic-text").fadeOut(function() {
        $(this).text("");
        $(this).fadeIn(typeEffect);
    });
}

changeWord();
