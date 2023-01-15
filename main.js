"use Stict"
const listItems = document.querySelector("ul")
const addItemBtn = document.querySelector(".add-styles");
const removeItemBtn = document.querySelector(".Remove-styles");

addItemBtn.addEventListener("click",()=>{
  listItems.classList.add("listStyles");
})
removeItemBtn.addEventListener("click",()=>{
  listItems.classList.remove("listStyles")
})


for(let i =7; i > 0; i++){
  document.querySelector("i")
}