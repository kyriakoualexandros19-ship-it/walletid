
const openQR = document.getElementById("openQR");
const closeQR = document.getElementById("closeQR");
const qrPopup = document.getElementById("qrPopup");


/* OPEN QR POPUP */

function showQR() {

    qrPopup.classList.add("active");

    qrPopup.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    closeQR.focus();

}


/* CLOSE QR POPUP */

function hideQR() {

    qrPopup.classList.remove("active");

    qrPopup.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    openQR.focus();

}


/* BUTTON EVENTS */

openQR.addEventListener("click", showQR);

closeQR.addEventListener("click", hideQR);


/* CLOSE WITH ESCAPE KEY */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        qrPopup.classList.contains("active")
    ) {

        hideQR();

    }

});
