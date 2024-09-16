const sections = document.querySelectorAll("section"); // return a NodeList
for (let section of sections) {
  section.style.backgroundColor = "lightgray";
  section.style.padding = "20px";
  section.style.margin = "20px";
  section.style.borderRadius = "10px";
}

const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "lightgreen";

placesContainer.classList.add("yellow-bg");

const coxsBazarLi = document.getElementById("coxsBazar");
coxsBazarLi.classList.add("large-text");
coxsBazarLi.classList.remove("large-text");


// create an li element and push it in the Frutis Collection Ul.
const fruitsCollection = document.getElementById("fruits-collection");
const li = document.createElement("li");
li.innerText = "Mango jose";
fruitsCollection.appendChild(li);
