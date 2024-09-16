// 1. Where to add
const placescollection = document.getElementById("places-collection");
console.log(placescollection);
// 2. What to be added
const li3 = document.createElement("li");
li3.innerText = "Pahartoli Bon";
// 3. add the child
placescollection.appendChild(li3);





// 1. Where to add
const main = document.querySelector('main');
// 2. What to be added
const section = document.createElement('section')
const h1 = document.createElement('h1')

h1.innerText = "My Friend List";
section.appendChild(h1);

const ul = document.createElement('ul')

const friend1 = document.createElement("li")
friend1.innerText = "Mahfuzur Rahman";
const friend2 = document.createElement("li")
friend2.innerText = "Mofayel Ahmmed Rana"
const friend3 = document.createElement("li")
friend3.innerText = "Muzammel Hossain"
const friend4 = document.createElement("li")
friend4.innerText = "Arman Zamani"
// add the child
ul.appendChild(friend1)
ul.appendChild(friend2)
ul.appendChild(friend3)
ul.appendChild(friend4)
// add the child
section.appendChild(ul)
main.appendChild(section) 





// Set innerHTML directly 
const sectionDress = document.createElement("section")
sectionDress.innerHTML = `
<h1> My Dress section </h1>
    <ul>
        <li>T-shirt</li>
        <li>Sendo-Genji</li>
        <li>Pent</li>
        <li>Boxer</li>
    </ul>
`

main.appendChild(sectionDress)