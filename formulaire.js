// Javascript propre à formulaire.html
// recopié en très grande partie du cours semaine 3, notamment les règles de vérification des saisies

document.addEventListener('DOMContentLoaded', function() {
    let image = document.getElementById('image');
    image.src = 'IIM.png';

    let title = document.querySelector('#main-title');
// ci-dessous listener pour le titre (Bienvenue à l'IIM), qui se met en bleu si on clique dessus, s'annule si on reclique
    title.addEventListener('click', function() {
        console.log("J'ai cliqué sur le titre");
        this.classList.toggle('blue');
    });
    let successMessage = document.getElementById('successMessage');

    let form = document.querySelector('form');
    let errorContainer = document.querySelector('.message-error');
    let errorList = document.querySelector('.message-error ul');
    let successContainer = document.querySelector('.message-success');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Réinitialiser les messages d'erreur
        errorList.innerHTML = "";
        errorContainer.classList.remove('visible');

        let email = document.querySelector('#email');
        let prenom = document.querySelector('#prenom');
        let nom = document.querySelector('#nom');
        let password = document.querySelector('#password');
        let passwordRepeat = document.querySelector('#password2');
        let radioButtons = document.querySelectorAll('input[name="classe"]');
        let selectedRadioButton = Array.from(radioButtons).find(rb => rb.checked);
        let axeSelect = document.getElementById('axe');
        let axeLabel = document.querySelector('label[for="axe"]');
        axeLabel.classList.add('required-label');

        // Validation des champs existants (email, prénom, nom, mot de passe)
        validateField(email, "Le champ email ne peut pas être vide");
        validateFieldLength(prenom, 1, "Veuillez entrer votre prénom");
        validateFieldLength(nom, 1, "Veuillez entrer votre nom");
        validatePassword(password);
        validatePasswordRepeat(passwordRepeat, password);

        // Validation du champ "select" (axe envisagé)
        let selectedOption = axeSelect.options[axeSelect.selectedIndex];

        if (!selectedOption || selectedOption.value === "") {
            errorContainer.classList.add('visible');
            axeLabel.classList.remove('success');

            let err = document.createElement('li');
            err.innerText = "Veuillez choisir un axe envisagé";
            errorList.appendChild(err);
        } else {
            axeLabel.classList.add('success');
        }

        // Validation finale et affichage du message de succès
        if (
            prenom.classList.contains('success') &&
            nom.classList.contains('success') &&
            email.classList.contains('success') &&
            password.classList.contains('success') &&
            passwordRepeat.classList.contains('success') &&
            axeLabel.classList.contains('success')
        ) {
            successMessage.innerText = "Votre inscription est bien prise en compte, à bientôt";
            successMessage.parentElement.classList.add('visible');
        }

    });

    // Fonction de validation pour la présence d'une valeur
    function validateField(field, errorMessage) {
        if (field.value === '') {
            errorContainer.classList.add('visible');
            field.classList.remove('success');

            let err = document.createElement('li');
            err.innerText = errorMessage;
            errorList.appendChild(err);
        } else {
            field.classList.add('success');
        }
    }

    // Fonction de validation de la longueur d'un champ
    function validateFieldLength(field, minLength, errorMessage) {
        if (field.value.length < minLength) {
            errorContainer.classList.add('visible');
            field.classList.remove('success');

            let err = document.createElement('li');
            err.innerText = errorMessage;
            errorList.appendChild(err);
        } else {
            field.classList.add('success');
        }
    }

    // Fonction de validation du mot de passe
    function validatePassword(passwordField) {

        // ci-dessous fonction très complexe recopiée du cours, pour la règle du mot de passe
        let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");

        if (passwordField.value.length < 10 || passCheck.test(passwordField.value) === false) {
            errorContainer.classList.add('visible');
            passwordField.classList.remove('success');

            let err = document.createElement('li');
            err.innerText = "Le mot de passe doit contenir 10 caractères minimum, une minuscule, une majuscule, un chiffre, et un caractère spécial";

            errorList.appendChild(err);
        } else {
            passwordField.classList.add('success');
        }
    }

    // Fonction de validation de la répétition du mot de passe
    function validatePasswordRepeat(repeatPasswordField, originalPasswordField) {
        if (originalPasswordField.value !== repeatPasswordField.value) {
            errorContainer.classList.add('visible');
            repeatPasswordField.classList.remove('success');

            let err = document.createElement('li');
            err.innerText = "Les mots de passe ne correspondent pas";

            errorList.appendChild(err);
        } else {
            repeatPasswordField.classList.add('success');
        }
    }

});


// Ci-dessous listener du bouton Dark Mode
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});


// Ci-dessous listener du burger de cette page formulaire.html (CSS est partagé, mais pas les js pour les 2 html)
document.addEventListener('DOMContentLoaded', function () {
    let burgerMenu = document.getElementById('burgerMenu');
    let menuContainer = document.querySelector('.menu-container');

    burgerMenu.addEventListener('click', function () {
        menuContainer.classList.toggle('visible');
        burgerMenu.classList.toggle('active');
    });

    let menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            let target = item.getAttribute('data-target');
            scrollToSection(target);
        });
    });

    // Fonction pour faire défiler jusqu'à la section cible ou rediriger vers une autre page
    function scrollToSection(target) {
        if (target === 'accueil') {
            // Si la cible est "accueil", redirigez vers la page d'accueil
            window.location.href = 'index.html';
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

        // Fermez le menu après avoir cliqué sur un élément
        menuContainer.classList.remove('visible');
        burgerMenu.classList.remove('active');
    }
});
