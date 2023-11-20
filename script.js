// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Simulez un processus d'aspiration de données
    simulateDataAspiration();
});

function simulateDataAspiration() {
    var progressBar = document.getElementById("progress-bar");
    var progress = 0;

    // Utilisez setInterval pour mettre à jour la barre de progression
    var interval = setInterval(function () {
        // Mettez à jour la barre de progression jusqu'à 100%
        if (progress < 100) {
            progress += 5; // Augmentez selon vos besoins, une valeur plus basse accélérera la progression
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(interval);

            // Redirigez l'utilisateur vers la page de données après l'aspiration complète
            redirectToDataPage();
        }
    }, 200); // Réduisez l'intervalle en millisecondes selon vos besoins pour accélérer la progression
}

function redirectToDataPage() {
    // Remplacez "page-des-donnees.html" par le nom de votre page de données
    window.location.href = "page-des-donnees.html";
}
