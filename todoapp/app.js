let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  let del = document.createElement("button");
  del.classList.add("delete");
  item.innerText = input.value;
  del.innerText = "Delete";
  ul.appendChild(item);
  item.appendChild(del);
  input.value = "";
});

//Not working

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }

//Right way to do this
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Delete");
  }
});
