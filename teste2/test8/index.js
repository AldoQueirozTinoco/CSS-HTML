function addElement(){
   const list = document.getElementById("list");
   const item = document.createElement("li");
   const node = document.createTextNode(listItem());
   item.appendChild(node);
   list.appendChild(item);
}
function listItem(){
    let item = prompt("Adicione um item na lista:");
    if (item != null){
        return item;
    }
}