const button = document.querySelector("#button");
const inputbox = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container")

button.addEventListener('click', () => 
{
    if (inputbox.value.trim() === "") return;
    if (listcontainer.children.length >= 10) 
    {
        alert("You can only add up to 10 tasks.");
        inputbox.value = "";
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    inputbox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    savedata();

})


listcontainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") 
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata () 
{
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showdata () 
{
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();

