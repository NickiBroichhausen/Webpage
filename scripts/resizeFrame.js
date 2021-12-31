
var frame = document.getElementById('frame');

frame.onload = onLoadFunction;
function onLoadFunction() {
  frame.style.height =
  frame.contentWindow.document.body.scrollHeight + 'px';
}