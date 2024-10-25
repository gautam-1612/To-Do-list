let add = document.getElementsByClassName("add")[0];
let count = 0;

add.addEventListener("click", () => {
    if (count < 4) {
        let newItem = prompt("Add Your new list item !");
        let elem = document.createElement("li");
        elem.innerText = newItem;
        document.querySelector("ol").appendChild(elem);
        count++;
    }
    else {
        alert("List reached to max limit, can't add more items ! ");
    }
})


let Delete = document.getElementsByClassName("delete")[0];
Delete.addEventListener("click", () => {
    let elem = document.querySelector("ol");
    let number = parseInt(prompt("Enter the number of the list you want to Delete !"));
    elem.removeChild(elem.children[number - 1]);
})