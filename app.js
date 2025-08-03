const form = document.querySelector("form");
const dashboard = document.querySelector(".dashboard");
const login = document.querySelector(".login-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  login.style.display = "none";
  dashboard.style.display = "block";
});

const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const msg = input.value.trim();
    if (msg) {
      chat.innerHTML += "<div><b>Vous :</b> " + msg + "</div>";
      chat.innerHTML += "<div><b>Bot :</b> Ceci est une réponse simulée à votre question.</div>";
      input.value = "";
      chat.scrollTop = chat.scrollHeight;
    }
  }
});