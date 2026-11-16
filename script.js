// My portfolio's JavaScript (Session 5)
console.log("Hello from script.js!");

// 1. Footer year: always this year
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// 2. Mobile menu: show and hide the links
const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    menuButton.textContent = "Close";
  } else {
    menuButton.textContent = "Menu";
  }
});

// 3. Dark mode, saved for next time
const themeButton = document.querySelector("#theme-button");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeButton.textContent = "Light mode";
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "Dark mode";
    localStorage.setItem("theme", "light");
  }
});

// 4. Contact form: friendly checks (nothing is really sent)
const form = document.querySelector(".contact-form");
const thanks = document.querySelector("#thanks");

function showError(id, message) {
  document.querySelector(id).textContent = message;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  let ok = true;

  showError("#name-error", "");
  showError("#email-error", "");
  showError("#message-error", "");
  thanks.hidden = true;

  if (name === "") {
    showError("#name-error", "Please type your name.");
    ok = false;
  }
  if (email.includes("@") === false) {
    showError("#email-error", "Your email needs an @ sign.");
    ok = false;
  }
  if (message.length < 10) {
    showError("#message-error", "Please write at least 10 characters.");
    ok = false;
  }

  if (ok) {
    thanks.textContent = `Thanks, ${name}! Your message looks good.`;
    thanks.hidden = false;
    form.reset();
  }
});
