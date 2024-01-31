"use strict";

const btn = document.getElementById("menu-btn");
const menu = document.querySelector(".mobile-menu");

btn.classList.remove("open");
menu.classList.remove("hidden");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
}
