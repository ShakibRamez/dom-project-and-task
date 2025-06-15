
  const addBtn = document.getElementById("addBtn");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    addBtn.addEventListener("click", function () {
      const text = todoInput.value.trim();
      if (text === "") {
        alert("Write a texe, please");
        return;
      }

      const li = document.createElement("li");
      li.innerText = text;

      const delBtn = document.createElement("button");
      delBtn.innerText = "delete";
      delBtn.className = "deleteBtn";
      delBtn.onclick = function () {
        li.remove();
      };

      li.appendChild(delBtn);
      todoList.appendChild(li);
      todoInput.value = ""; 

    })