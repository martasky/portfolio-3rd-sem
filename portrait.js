"use strict";

window.addEventListener("DOMContentLoaded", loadSvg);

async function loadSvg() {
  let response = await fetch("assets/wholelineartwork.svg");
  let mySvgData = await response.text();
  document.querySelector("#line").innerHTML = mySvgData;
  drawSvg();
}

function drawSvg() {
  document.querySelectorAll("path").forEach((path) => {
    if (path.id != "draw") {
      path.setAttribute("class", "path");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "var(--primary-text-color");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("pathLength", "1");
    } else {
      path.setAttribute("class", "path2");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "var(--primary-text-color");
      path.setAttribute("stroke-width", "2");
      /* path.setAttribute("pathLength", "1"); */

      // Get the id of the <path> element and the length of <path>
      let line = document.querySelector("#draw");
      let length = line.getTotalLength();

      // The start position of the drawing
      line.style.strokeDasharray = length + " " + length;

      // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
      line.style.strokeDashoffset = length;

      // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
      window.addEventListener("scroll", myFunction);

      function myFunction() {
        let scrollpercent =
          (document.body.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

        let draw = length * scrollpercent;

        // Reverse the drawing (when scrolling upwards)
        line.style.strokeDashoffset = length - draw;
      }
    }
  });
}
