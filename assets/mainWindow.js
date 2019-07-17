
const Mysql = require("./lib/mysql.js");
const Todo = require("./lib/todo.js");
const lgroup = document.querySelector(".todo-container");
var addTodo = document.querySelector("#addTodo");
var btn1 = document.querySelector("#button1");
var text1 = document.querySelector("#text1");

var mysql = new Mysql({
    host: "localhost",
    user: "root",
    password: null,
    database: "mysql-todo"
});
var todo = new Todo({
    mysql: mysql,
    lgroup: lgroup
});
btn1.addEventListener("click", () => {
   todo.viewItems();
   setTimeout(() => {
    console.log("Time OUT !!!");
   }, 3000);
    
});
addTodo.addEventListener("click",   () => {
    //if(text1.text.trim() == "") return;
    todo.insert("key", text1.value);
    
});
document.addEventListener("keydown", (e) => {
    //if(text1.text.trim() == "") return;
    
    if(e.which == 13){
        todo.insert("key", text1.value);
    }
});


//Dinamic List
//const cont = document.createElement("div");

todo.viewItems();