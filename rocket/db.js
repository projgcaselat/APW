const mysql = require ("mysql") 

const connecton = mysql.createConnection ({
    host:"localhost",
    user:"root",
    password: "",
    database:"joalheria" 
})
    connecton.connect()

    //inserir
    function inserir(){
    let sql = "insert into joia set?" 
    let dados = {nomejoia:"esmeralda",cor:"vermelha",ano:"2023"}
    connecton.query(sql,dados,function(error,results,fleids){
    if(error) throw error 
    console.log("cadastrado!")  
}) 
    connection.end()
}
inserir()