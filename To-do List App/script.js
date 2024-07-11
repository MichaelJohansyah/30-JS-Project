const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Fungsi untuk cek list dan hapus list
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Fungsi untuk simpan data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fungsi untuk tetap perlihatkan data/list yang ada biarpun sudah di refresh
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();