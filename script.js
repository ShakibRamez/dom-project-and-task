 //selection elements in dom
 
 document.getElementById("title");
  document.getElementsByClassName("text");
  document.getElementsByTagName("p");
  document.querySelector(".text");
  document.querySelectorAll(".text");

  //stylng a element
let title = document.getElementById("title");
title.style.color = "red";
title.style.fontSize = "24px";

//creating a element
let newDiv = document.createElement("div");
newDiv.innerText = "new div";

//adding elements
let container = document.getElementById("container");
container.appendChild(newDiv);
