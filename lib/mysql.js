const mysql = require("mysql");


class Mysql{
    constructor(opt){
        
        //host, user, password, database 
       this.opt = opt;
    };
    connect() {
        this.connection = mysql.createConnection({
            host: this.opt.host,
            user: this.opt.user,
            password : this.opt.password,
            database: this.opt.database
        })
    }
    insert(table, keys, values){
        this.connect();

        //MYSQL QUERY
        //var query = "INSERT INTO `todo-list`(`todo_key` , `value`) VALUES ('" + "deneme" + "','" + "value" + "')";
        var query =  "INSERT INTO "+ table +" (" + keys + ") VALUES (" + values + ")";
        console.log(query);
        this.connection.query(query, (err, result) =>{
            //IF ERROR
            if(err) throw err;
            
        });
        this.end();
    }
    remove(wKey, wValue){
        this.connect();
        var query = "DELETE FROM `todo-list` WHERE " + wKey + " = " + wValue;
        this.connection.query(query,(e,result) => {
            if(e) throw e;
        });

        this.end();
    }
    getRows(table, callback, values = "", where = ""){
        this.connect();
        if(values == "")
            values = "*";
        var query = "SELECT " + values + " FROM `" + table + "` "+ where;

        
        //RUN QUERY
        this.connection.query(query, (err, rows) => {
            if(err){
                console.log(err);
                return;
            }
            callback(rows);
        });
        this.end();
        /*this.connection.query("SELECT * FROM `todo-list`", (err, rows) => {
            if(err){
                console.log(err);
                return;
            }
            callback(rows);
            
            
        });*/
        
    }
    end(){
        this.connection.end();
    }
}
module.exports = Mysql;