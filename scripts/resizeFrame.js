
var frame = document.getElementById('frame');

// frame.onload = onLoadFunction;
frame.onreadystatechange = onLoadFunction;
function onLoadFunction() {
  // frame.style.height =
  // frame.contentWindow.document.body.scrollHeight + 'px';
  alert("aaa");
  if (frame.readyState == "complete") {
    alert("ffeff");
    frame.style.height =
    frame.contentWindow.document.body.scrollHeight + 'px';
  }
}

frame.onreadystatechange = function () {
  alert("aaa");
  if (frame.readyState == "complete") {
    alert("ffeff");
    frame.style.height =
    frame.contentWindow.document.body.scrollHeight + 'px';
  }
}
alert("starts");