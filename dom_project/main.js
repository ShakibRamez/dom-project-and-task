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
