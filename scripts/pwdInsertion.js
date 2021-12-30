var myButton = document.querySelector('button');


myButton.onclick = function () {
    if (document.getElementById("pwd").value == "28.07.2001") {      //jaja ... das ist nicht sicher, ist mir aber egal :)
        document.getElementById("text").textContent = "richtig, Sie sollten in kuerze weitergeleitet werden";
        localStorage.setItem('authorized', true);
        window.open('homepage.htm');
    }
    else {
        document.getElementById("text").textContent = "falsches Passwort";
    }
}