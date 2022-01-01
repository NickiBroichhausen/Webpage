
var frame = document.getElementById('frame');

// frame.onload = onLoadFunction;
// function onLoadFunction() {
//   frame.style.height =
//   frame.contentWindow.document.body.scrollHeight + 'px';
// }

frame.onreadystatechange = function () {
  if (document.readyState == "complete") {
    alert("ffeff");
    frame.style.height =
    frame.contentWindow.document.body.scrollHeight + 'px';s
  }
}