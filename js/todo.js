var todoinput = document.querySelector(".todo-input");
var todobutton = document.querySelector(".todo-btn");
var todolist = document.querySelector(".todo-list");
todobutton.onclick = create;
todolist.onclick = checkdelete;
function create(e){
    if (todoinput.value != "") {
        e.preventDefault();
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        var newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerHTML = todoinput.value;
        newDiv.appendChild(newLi);

        var checkbtn = document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML='<i class="fa fa-check"></i>';
        newDiv.appendChild(checkbtn);

        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML='<i class="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);

        todolist.appendChild(newDiv);
        todoinput.value='';
    }
    else{
        alert("Input Field Can't Be Blank");
    }
}
    function checkdelete(e){
        var item=e.target;
        if(item.classList[0]==="delete-btn"){
            var parent = item.parentElement;
            parent.remove();
        }
        
        var item=e.target;
        if(item.classList[0]==="check-btn"){
            var parent = item.parentElement;
            parent.classList.toggle("completed");
        }
}
