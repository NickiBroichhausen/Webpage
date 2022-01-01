
var frame = document.getElementById('frame');

// frame.onload = onLoadFunction;
// function onLoadFunction() {
//   frame.style.height =
//   frame.contentWindow.document.body.scrollHeight + 'px';
// }

frame.onreadystatechange = function () {
  alert("aaa");
  if (frame.readyState == "complete") {
    alert("ffeff");
    frame.style.height =
    frame.contentWindow.document.body.scrollHeight + 'px';s
  }
}
alert("starts");