
// Ci-dessous listener pour le slider, flèche gauche et droite
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper(".swiper-mon-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
            },
            autoplay: {
                delay: 6000
            }
    })
})

// Ci-dessous listener pour le bouton Dark Mode qui est dans le footer de index.html
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});


// Ci-dessous listener pour le menu Burger de index.html - le Burger de formulaire.html a son listener dans formulaire.js
document.addEventListener('DOMContentLoaded', function () {
    let burgerMenu = document.getElementById('burgerMenu');
    let menuContainer = document.querySelector('.menu-container');

    burgerMenu.addEventListener('click', function () {
        menuContainer.classList.toggle('visible');
        burgerMenu.classList.toggle('active');
        console.log('clic sur menu Burger')
    });

    let menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            let target = item.getAttribute('data-target');
            scrollToSection(target);
        });
    });

 // Fonction pour faire défiler jusqu'à la section cible
function scrollToSection(target) {
    if (target === 'inscription') {
        // Si la cible est "inscription", redirigez vers formulaire.html
        window.location.href = 'formulaire.html';
    } else {
        // Sinon, faites défiler jusqu'à la section cible
        let targetElement = document.getElementById(target);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    }

    // Ci-dessous ferme le menu, après clic
    menuContainer.classList.remove('visible');
    burgerMenu.classList.remove('active');
}


});

// Ci-dessous listener pour les Tabs
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez tous les onglets
    let tabs = document.querySelectorAll('.tab');

    // Attachez un gestionnaire d'événements à chaque onglet
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            // Réinitialisez l'état des onglets et contenus
            resetTabsAndContents();

            // Activez l'onglet actuel
            tab.classList.add('active');

            // Sélectionnez le contenu correspondant et activez-le
            let target = tab.getAttribute('data-target');
            let content = document.querySelector('.content.' + target);
            content.classList.add('active');
        });
    });

    // Fonction pour réinitialiser l'état des onglets et contenus
    function resetTabsAndContents() {
        tabs.forEach(function (tab) {
            tab.classList.remove('active');
        });

        let contents = document.querySelectorAll('.content');
        contents.forEach(function (content) {
            content.classList.remove('active');
        });
    }
});


