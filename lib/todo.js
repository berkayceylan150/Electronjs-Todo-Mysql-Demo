class Todo{
    constructor(opt){
        this.mysql = opt.mysql;
        this.lgroup = opt.lgroup;
    };

    addItem(text, id = "0"){
        //List Group
        
    
        //List Group İtem
        const lgitem = document.createElement("div");
        lgitem.innerHTML = "<span id = 'todoId' style = 'display:none'>" + id + "</span>";
        lgitem.append(addZero(id) + " - " + text);
        lgitem.className = "list-group-item d-flex justify-content-between align-items-center";
        
        //Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger";
        deleteBtn.innerText = "X";
        
        deleteBtn.addEventListener("click", (e) => {
            if(confirm("Do you want delete this TODO?")){
                var index = e.target.parentNode.querySelector("#todoId").innerText;
                
                //DELETE AND VİEW
                this.mysql.remove("id", index);
                setTimeout(() => {viewItems()}, 500);
                
                e.target.parentNode.remove();
                
            }
        });
       
        lgitem.appendChild(deleteBtn);
        this.lgroup.appendChild(lgitem);
        
    };
    insert(key, value){

    };
    viewItems(){
        this.lgroup.innerText = "";
    
       this.mysql.getRows("todo-list", (rows) =>{
            rows.forEach((row) => {
                todo.addItem(row.value, row.id);
            });
        },"id,value", "");
    }
    insert(key, value){
        mysql.insert("`todo-list`","`todo_key` , `value`", "'" + key +"', " + "'" + value + "'");
        setTimeout(() => {this.viewItems()},500);
        text1.value = ""
    }
}
module.exports = Todo;