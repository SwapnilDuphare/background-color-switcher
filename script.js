document.getElementById("orange").onclick = swithToOrange;
document.getElementById("pink").onclick = swithTopink;
document.getElementById("Green").onclick = swithToGreen;
document.getElementById("Red").onclick = swithToRed;

function swithToOrange() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "orange";
  document.getElementsByTagName("body")[0].style.color = "white";
}
  function swithTopink() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
    document.getElementsByTagName("body")[0].style.color = "white";
  }
    function swithToGreen() {
      document.getElementsByTagName("body")[0].style.backgroundColor = "Green";
      document.getElementsByTagName("body")[0].style.color = "white";
    }
      function swithToRed() {
        document.getElementsByTagName("body")[0].style.backgroundColor = "Red";
        document.getElementsByTagName("body")[0].style.color = "white";
}