const parentContainer = document.getElementById("parentContainer");

const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");

const cardImage = document.createElement("img");

cardImage.setAttribute(
  "src",
  "https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20plan%20to%20Holiday%20in%202021.jpg"
);
cardImage.setAttribute("alt", "travel-card");

const cardSpan = document.createElement("span");
const text = document.createTextNode(
  "The journey of a thousand miles begins with a single step"
);
cardSpan.appendChild(text);

cardContainer.appendChild(cardImage);
cardContainer.appendChild(cardSpan);

parentContainer.appendChild(cardContainer);

console.log("executed");
