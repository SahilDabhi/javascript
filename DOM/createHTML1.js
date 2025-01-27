const parentContainer = document.getElementById("parentContainer");

const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");

const cardImage = document.createElement("img");
cardImage.classList.add("image");

cardImage.setAttribute(
  "src",
  "https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20plan%20to%20Holiday%20in%202021.jpg"
);

const cardText = document.createElement("span");
cardText.innerText = "Welcome Lorem ipsum dolor sit.";

cardContainer.appendChild(cardImage);
cardContainer.appendChild(cardText);

parentContainer.appendChild(cardContainer);

console.log("done");
