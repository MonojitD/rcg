
function color() {
 let hex = Math.random().toString(16).substring(2, 8);
  document.body.style.background = `linear-gradient(to right, ${"#" + hex}, ${
    "#" + hex
  })`;
  document.getElementById("hexcode").innerText = "Hex color code is #" + hex;
  document.getElementById("btn3").style.display = "block";
  return;
}
function gradient () {
  let hex1 = Math.random().toString(16).substring(2, 8);
  let hex2 = Math.random().toString(16).substring(2, 8);
  document.body.style.background = `linear-gradient(45deg, ${"#" + hex1}, ${
    "#" + hex2
  })`;
  return;
}

 var i = 0;
function auto(){
  i = i +1;
  if (i%2) {
    s = window.setInterval(gradient, 1500);
    document.getElementById("btn2").innerText = "Stop";
  }
  else {
    window.clearInterval(s);
    document.getElementById("btn2").innerText = "Start Generate";
  }
  return;
}

const copyCode =() => {
  let innerTxt = document.getElementById("hexcode").innerText;
  let code = innerTxt.trim().split(" ")[4];
  navigator.clipboard.writeText(code);
  alert(`Hex code ${code} coppied.`)
}
