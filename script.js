// ===============================
// DEEP SEARCH - SCRIPT PRINCIPAL
// ===============================


// ===============================
// CONFIGURACIÓN EMAILJS
// ===============================

const emailJsConfig = {
    service_id: 'service_n844fiv',
    template_id: 'template_a6qb2tb',
    public_key: 'yTowpQuz0iMmDl3'
};


// ===============================
// INICIALIZAR EMAILJS
// ===============================

(function () {

    if (typeof emailjs !== "undefined") {

        emailjs.init(emailJsConfig.public_key);

        console.log("EmailJS iniciado correctamente");

    } else {

        console.error("EmailJS no está cargado");

    }

})();


// ===============================
// INTRO ANIMACIÓN (INDEX)
// ===============================

window.addEventListener("load", function () {

    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    if (intro && main) {

        setTimeout(function () {

            intro.style.display = "none";
            main.style.display = "block";

        }, 5000);

    }

});


// ===============================
// BOTÓN IR A NOTICIAS
// ===============================

function irNoticias() {

    window.location.href = "noticias.html";

}


// ===============================
// FORMULARIO SUSCRIPCIÓN
// ===============================

function suscribirse(event) {

    event.preventDefault();

    const emailInput = document.getElementById("email");

    if (!emailInput) {

        alert("Campo de correo no encontrado");
        return;

    }

    const parametros = {

        email: emailInput.value

    };


    emailjs.send(
        emailJsConfig.service_id,
        emailJsConfig.template_id,
        parametros
    )
    .then(function () {

        alert("✅ Gracias por suscribirte a Deep Search");

        document.getElementById("formSuscripcion").reset();

    })
    .catch(function (error) {

        alert("❌ Error al enviar el correo");

        console.log(error);

    });

}


// ===============================
// EFECTOS VISUALES NOTICIAS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".news-card");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            card.classList.add("animate-pulse");

            setTimeout(() => {
                card.classList.remove("animate-pulse");
            }, 1000);

        });

    });

});
