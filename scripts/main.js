var myButton = document.querySelector('button');
var myText = document.querySelector('p');

function setUserName() {
    var myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name', myName);
    myText.textContent = myName;
  }

  myButton.onclick = function() {
    setUserName();
  }