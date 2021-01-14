let par = document.querySelector("p");
let dogLink = document.createElement("a");
dogLink.textContent = "Amazing Dogs!";
dogLink.setAttribute("href", "https://dog.ceo/");
par.appendChild(dogLink);
