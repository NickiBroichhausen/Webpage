var myButton = document.querySelector('button');

myButton.onclick = function () {
    if (document.getElementById("pwd").value == "28.07.2001") {      //jaja ... das ist nicht sicher, ist mir aber egal :)
        document.getElementById("text").textContent = "richtig, Sie koennen nun die Website benutzen";
        sessionStorage.setItem('authorized', 'isAuthorized');
    }
    else {
        document.getElementById("text").textContent = "falsches Passwort";
    }
}