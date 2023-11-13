window.onload = function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp

    console.log("DOM ready!");

    document.querySelector("#submit").addEventListener("click", function (event) {
        event.preventDefault();
        validateEmail();
        allright();
    });
    document.querySelector("#btngps").addEventListener("click", function (event) {
        event.preventDefault();
        getLocation();
    });
};

function comparerDates() {
    const nowTimestamp = Date.now();
    const birthday = document.getElementById("naissance").value;
    const birthdayDate = new Date(birthday);
    const birthdayTimestamp = birthdayDate.getTime();

    return birthdayTimestamp > nowTimestamp;
}

function champsvide() {
    const uname = document.getElementById("nom").value;
    const ufname = document.getElementById("prénom").value;
    const uadresse = document.getElementById("Address").value;
    const ubirthday = document.getElementById("naissance").value;
    const uemail = document.getElementById("email").value;
    const modal = new bootstrap.Modal(document.getElementById("myModal"));

    return uname && ufname && uadresse && ubirthday && uemail;
}

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function allright() {
    const modal = new bootstrap.Modal(document.getElementById("myModal"));
    const modal2 = new bootstrap.Modal(document.getElementById("myModal2"));
    comparerDates();
    champsvide();
    if (comparerDates()) {
        alert("La date d'anniversaire ne doit pas être dans le futur !");
    } else if (champsvide() == 0) {
        modal.show();
    } else {
        ufname = document.getElementById("prénom").value;
        ubirthday = document.getElementById("naissance").value;
        uaddress = document.getElementById("Address").value;
        document.getElementById("modalFirstName").textContent = ufname;
        document.getElementById("modalBirthday").textContent = ubirthday;
        document.getElementById("modalAddress").textContent = uaddress;
        document.querySelector("#myModal2  img").src = `https://maps.googleapis.com/maps/api/staticmap?markers=${uaddress}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`
        modal2.show();
    }
}
function fermer() {
    const modal = new bootstrap.Modal(document.getElementById("myModal"));
    modal.hide();
}




function validateEmail() {
    const email = document.getElementById("email").value;
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
        alert("Veuillez entrer une adresse e-mail valide.");
    }
}
