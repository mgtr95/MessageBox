var buttonValue = "";

document.getElementById("left").addEventListener("click", () => {
  buttonValue = "left";
});

document.getElementById("right").addEventListener("click", () => {
  buttonValue = "right";
});


//funkcija za slanje poruke
function messageFunction() {
  //dohvati input content
  let messageInput = document.getElementById("txt").value;

  //kreiraj div
  const messageDiv = document.createElement("div");

  //dodaj klasu divu
  if ((buttonValue === "left")) {
    messageDiv.classList.add("message-left");
  } else {
    messageDiv.classList.add("message-right");
  }

  //dodaj tekst u div
  messageDiv.textContent = messageInput;

  //konacni div dodaj u parent div
  const mainDiv = document.getElementById("messages");
  mainDiv.appendChild(messageDiv);

  //ocisti input
  messageInput.value = "";

  //prikazi zadnji div
  messageDiv.scrollIntoView();

}

document.getElementById("send").addEventListener("click", messageFunction);
