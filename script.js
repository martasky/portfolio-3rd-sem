"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  registerEvents();
  getCursor();
}

function registerEvents() {
  //open menu
  let menu = document.querySelector("#menu_btn");
  menu.addEventListener("click", openMenu);
  // close menu
  let close = document.querySelector(".menu_open_btn");
  close.addEventListener("click", closeMenu);

  //Menu links
  document.querySelectorAll(".menu_projects a").forEach((a) => {
    a.addEventListener("mouseover", () => {
      createImage(a, event);
    });
    a.addEventListener("mouseout", () => {
      removeImage(a, event);
    });
  });

  //hover in about me page
  document.querySelectorAll(".about_text_wrapper p span").forEach((span) => {
    span.addEventListener("mouseover", () => {
      createAboutMeImage(span, event);
    });
    span.addEventListener("mouseout", () => {
      removeAboutMeImage(span, event);
    });
  });

  // footer
  document.querySelectorAll("#contact_wrapper a").forEach((section) => {
    section.addEventListener("mouseover", showInfo);
    section.addEventListener("mouseout", removeInfo);
  });

  // cursor
  document.querySelectorAll("#frontpage img").forEach((img) => {
    img.addEventListener("mouseover", changeCursor);
    img.addEventListener("mouseout", defaultCursor);
  });
}

function openMenu() {
  let body = document.querySelector("body");
  body.style.overflowY = "hidden";
  /* const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1); */
  document.querySelector(".menu").classList.remove("hidden");
  let cursor = document.querySelector(".cursor");
  cursor.style.background = "var(--bg--color)";
  /* 
  body.style.position = "fixed";
  body.style.top = `-${window.scrollY}px`; */
}

function closeMenu() {
  document.querySelector(".menu").classList.add("hidden");
  let body = document.querySelector("body");
  body.style.overflowY = "";
  let cursor = document.querySelector(".cursor");
  cursor.style.background = "";
  /* let body = document.querySelector("body");
  body.style.position = "";
  body.style.top = ""; */
}

function createImage(a, event) {
  let img = document.createElement("img");
  img.setAttribute("class", "menu_image");
  if (a.parentElement.id === "memover") {
    img.setAttribute("src", "assets/memover-color.png");

    document.querySelector("#memover").appendChild(img);
  } else if (a.parentElement.id === "silfen") {
    img.setAttribute("src", "assets/silfen-color.png");

    document.querySelector("#silfen").appendChild(img);
  } else if (a.parentElement.id === "ullo") {
    img.setAttribute("src", "assets/ullo-color.png");

    document.querySelector("#ullo").appendChild(img);
  } else if (a.parentElement.id === "hogwarts") {
    img.setAttribute("src", "assets/hogwarts-part.png");

    document.querySelector("#hogwarts").appendChild(img);
  } else {
    img.setAttribute("src", "assets/gonuts-top.png");

    document.querySelector("#gonuts").appendChild(img);
  }

  a.addEventListener("mousemove", moveImage);
}

function removeImage(a, event) {
  let obj = event.target.parentElement;
  console.log("obj", obj);
  if (obj.childElementCount > 1) {
    obj.removeChild(obj.lastElementChild);
  }
}

function moveImage(event) {
  document.querySelectorAll("a").forEach((a) => {
    let container = a;
    var x = event.clientX;
    var y = event.clientY;
    let xPos = x - container.getBoundingClientRect().left;
    let yPos = y - container.getBoundingClientRect().top;

    console.log("x", x, "y", y);
    document.querySelector(".menu_image").style.transform = `translateX(${x}px`;
  });
}

/****** about me page  *******/

function createAboutMeImage(span, event) {
  let img = document.createElement("img");
  img.setAttribute("class", "about_image");
  if (span.id === "festivals") {
    img.setAttribute("src", "assets/festival.png");
    document.querySelector("#festivals").appendChild(img);
  } else if (span.id === "mountains") {
    img.setAttribute("src", "assets/mountains.png");
    document.querySelector("#mountains").appendChild(img);
  } else if (span.id === "art") {
    img.setAttribute("src", "assets/photomuseum.png");
    document.querySelector("#art").appendChild(img);
  } else {
    img.setAttribute("src", "assets/watermelon.png");
    document.querySelector("#vegetables").appendChild(img);
  }
}
function removeAboutMeImage(span, event) {
  let obj = event.target;
  console.log("obj", obj);
  if (obj.childElementCount != 0) {
    obj.removeChild(obj.lastElementChild);
  }
}

/****** footer *********/
function showInfo(event) {
  console.log("has been called??");
  let section = event.currentTarget;
  console.log("section", section);

  let cursor = document.querySelector(".cursor");
  cursor.style.background = "var(--bg--color)";
  section.style.backgroundImage = "url(assets/gradient-bg.svg)";
  section.style.backgroundSize = "cover";
  section.lastElementChild.style.width = "65%";

  if (section.lastElementChild.id === "linked") {
    document.querySelector("#linked").textContent = `Connect with me`;
  } else if (section.lastElementChild.id === "gmail") {
    document.querySelector("#gmail").textContent = "Get in touch";
  } else {
    document.querySelector("#github").textContent = "Explore my projects";
  }
}

function removeInfo(event) {
  let section = event.currentTarget;

  console.log("section", section);

  let cursor = document.querySelector(".cursor");
  cursor.style.background = "";

  section.style.backgroundImage = "";
  section.style.backgroundSize = "";
  section.lastElementChild.style.width = "initial";
  if (section.lastElementChild.id === "linked") {
    document.querySelector(
      "#linked"
    ).innerHTML = `<img src="assets/linked.svg" />`;
  } else if (section.lastElementChild.id === "gmail") {
    document.querySelector(
      "#gmail"
    ).innerHTML = `<img src="assets/gmail.svg" />`;
  } else {
    document.querySelector(
      "#github"
    ).innerHTML = `<img src="assets/github.svg" />`;
  }
}

function getCursor() {
  let cursor = document.querySelector(".cursor");
  document.body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}
function changeCursor(event) {
  let cursor = document.querySelector(".cursor");
  cursor.style.backgroundImage = "url(assets/big_cursor.svg)";
  cursor.style.transform = "scale(4,4)";
  cursor.style.transition = "transform 0.5s";
  /*   cursor.style.height = "150px";
  cursor.style.width = "150px";
  cursor.style.transition = "height 1s";
  cursor.style.transition = "width 1s"; */
}
function defaultCursor() {
  let cursor = document.querySelector(".cursor");
  cursor.style.backgroundImage = "url(assets/gradient-bg.svg)";
  cursor.style.transform = "scale(1,1)";
}
