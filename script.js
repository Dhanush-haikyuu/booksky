var introduce = document.querySelector(".add")
var popupdis = document.querySelector(".box-main")
var popupoverflow = document.querySelector(".overlayout")

introduce.addEventListener("click",function()
    {
        popupdis.style.display="block";
        popupoverflow.style.display="block";

    }
)

var cancelpop = document.querySelector(".cancelpop")
cancelpop.addEventListener("click",function(event)
{
    event.preventDefault();
    popupoverflow.style.display="none";
    popupdis.style.display="none";

})


//select container,addbutton,b0c-container

var containerbox=document.querySelector(".container")
var extras = document.querySelector(".extra")
var bookinput = document.getElementById("bookadd")
var authorinput=document.getElementById("authoradd")
var shortdes = document.getElementById("shortadd")

extras.addEventListener("click",function(event)
{
    var div = document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2 style=color:red>${bookinput.value}</h2>
    <h5>${authorinput.value}</h5>
    <p>${shortdes.value}</p>

    <button onclick='removal(event)'>delete</button>`
    containerbox.append(div)
    
    event.preventDefault();
    popupoverflow.style.display="none";
    popupdis.style.display="none";



    
})

function removal(event)
{
    event.target.parentElement.remove()


}




