 //change style page
 function changeStyle() {
      const el = document.getElementById("styleText");
      el.classList.remove("text-gray-800");
      el.classList.add("bg-black", "text-white", "font-bold");
 }


 //add-item page
    function addItem() {
      const ul = document.getElementById("itemList");
      const li = document.createElement("li");
      li.textContent = "new item added";
      ul.appendChild(li);
    }


//event-listener
 document.getElementById("bgBtn").addEventListener("click", function () {
      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-blue-100");
    });

    //mouse-events.
      const box = document.getElementById("hoverBox");

    box.addEventListener("mouseover", () => {
      box.classList.remove("bg-white", "text-black");
      box.classList.add("bg-blue-500", "text-white");
    });

    box.addEventListener("mouseout", () => {
      box.classList.remove("bg-blue-500", "text-white");
      box.classList.add("bg-white", "text-black");
    });