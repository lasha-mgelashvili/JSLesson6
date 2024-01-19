// homevork 1

let newDivElement = document.createElement("div");

newDivElement.classList.add("wraper");

let insertedElement = document.createElement("img");

insertedElement.setAttribute("src", "https://shorturl.at/hpqL6");
insertedElement.setAttribute("alt", "image");
insertedElement.style.width = "1000px";
insertedElement.style.height = "600px";

newDivElement.appendChild(insertedElement);

let newElement = document.createElement("h2");
newElement.classList.add("title");
newElement.innerText = "image title";
newElement.style.fontSize = "30px";
newElement.style.color = "red";

newDivElement.appendChild(newElement);

document.getElementById("container").appendChild(newDivElement);

// homework 2

let innertext = document.querySelectorAll(".triple");
innertext.forEach(element => {
      let textElement = document.createElement("h2");
      textElement.classList.add("text");
      textElement.textContent = "hello";

      element.appendChild(textElement)
});

console.log(innertext);

// homework 3


//მოკლედ სამის ნახევარია ახლა და ძაან დავიღალე დანარჩენს კვირას დავწერ ამის გაგრძელებას