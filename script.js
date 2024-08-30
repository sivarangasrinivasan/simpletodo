function todofun(){
    var todoval=document.getElementById("todo-input");
    var todoinp=todoval.value.trim();

    if(todoinp!==""){
        var li=document.createElement("li");
        li.textContent=todoinp;

        var delbtn=document.createElement("Button");
        delbtn.textContent="Delete";
        delbtn.classList.add("delete-btn");
        delbtn.onclick=function(){
             li.remove();
        }
        li.appendChild(delbtn);

        document.getElementById("todo-list").appendChild(li);
        todoval.value="";
    }
    else{
        alert("Enter Value")
    }
}