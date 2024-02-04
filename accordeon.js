document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez tous les éléments .accordeon
    let accordions = document.querySelectorAll('.accordeon');

    // Attachez un gestionnaire d'événements à chaque élément .accordeon
    accordions.forEach(function (accordion) {
        // Sélectionnez le titre et le contenu de chaque accordeon
        let titre = accordion.querySelector('.titre');
        let contenu = accordion.querySelector('.contenu');

        // Attachez un gestionnaire d'événements au clic sur le titre
        titre.addEventListener('click', function () {
            // Fermez tous les accordeons sauf celui actuellement cliqué
            closeAllAccordions(accordion);

            // Basculez la classe 'open' sur l'accordeon actuel
            accordion.classList.toggle('open');
        });
    });
});

// Fonction pour fermer tous les accordeons sauf celui actuellement cliqué
function closeAllAccordions(currentAccordion) {
    let accordions = document.querySelectorAll('.accordeon');

    accordions.forEach(function (accordion) {
        if (accordion !== currentAccordion && accordion.classList.contains('open')) {
            accordion.classList.remove('open');
        }
    });
}
