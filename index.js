let schedule=document.getElementById("schedule");
let maincontainer=document.getElementById("container");
let Popup=document.getElementById("Popup");
let joinmeeting=document.getElementById("joinmeeting");
let body=document.querySelector("body");

schedule.addEventListener("click",()=>
{

Popup.classList.remove("active")
maincontainer.classList.add("active")
})

joinmeeting.addEventListener("click",()=>{
    Popup.classList.add("active")
maincontainer.classList.remove("active")
})