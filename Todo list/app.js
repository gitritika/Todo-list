const inputbox = document.querySelector("input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list-container");



function add_element(){
   if(inputbox.value == ''){
    alert('you must write something');
   }
   else{
    const li = document.createElement("ul");
    li.innerHTML = inputbox.value;
    list.appendChild(li) 
    inputbox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    li.querySelector("span").addEventListener("click",remove);
    function remove() {
        li.remove();
    }
   }

}
btn.addEventListener("click",()=>{
    add_element();
})