"use strict";

window.addEventListener("DOMContentLoaded", loadSvg);

async function loadSvg() {
  let response = await fetch("assets/lineartme.svg");
  let mySvgData = await response.text();
  document.querySelector("#portrait").innerHTML = mySvgData;
  /* drawSvg(); */
}
