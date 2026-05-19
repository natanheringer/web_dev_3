const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    port:3306,
    password:"catolica",
    database:"escola_10",
})

// CRUD 

app.use(cors());
app.use(express.json());

// CREATE 
app.post("/register",(req, res)=>{
    const {nome} = req.body;
    const {idade} = req.body;

    let SQL = "INSER INTO alunos(nome,idade) VALUES (?,?)";

    db.query(SQL,[nome,idade],(err, result)=>{
        console.log(err);
    })
});

// READ 
app.get("/listar", (req, res)=>{
    let SQL = "SELECT * FROM alunos";
    db.query(SQL, (err, result)=>{
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao listar alunos"});
        } else {
            res.json({ message: "aluno excluido com sucesso" });
        }
    });
});




// UPDATE

// DELETE
app.delete("/excluir/:id", (req, res)=>{
    const alunoId = req.params.id;
    // execute uma consulta SQL para excluir o aluno com base no ID
    const SQL = "DELETE FROM alunos WHERE id = ?";
    db.query(SQL, [alunoId], (err, result)=>{
        if (err){
            console.error(err);
            res.status(500).json({ error: "Erro ao excluir aluno"});
        } else {
            res.json({})
        }
    });
});



app.listen(3001,()=>{
    console.log("rodando servidor");
});