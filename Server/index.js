const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());


app.listen(3001, ()=>
    console.log("Running")
)

const db = mysql.createConnection({
    user:   "root",
    host:   "localhost",
    password:   "",
    database:   "dairy_db"
})
//register
app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email


    db.query("INSERT INTO users(username, password, first_name, last_name, email) VALUES(?,?,?,?,?)", 
    [username, password, first_name, last_name, email], 
    (err, result) => {
        console.log(err);
        res.send(200);
        })
})


app.post('/login', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
   
    db.query("SELECT * FROM users WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        if (err){
            res.send({err: err});
        }
        if(result.length > 0){
            res.send(result)
        }else{
            res.send({message: "Wrong username/password"})
        }
        })
})


app.post('/cow', (req, res) => {

    // const animalID = req.body.animalID
    const staffID = req.body.staffID
    const color  = req.body.color
    const age = req.body.age
    const breed = req.body.breed
    const sex = req.body.sex
    const fathersID = req.body.fathersID
    const mothersID = req.body.mothersID
    // const birthDate = req.body.birthDate
    const height =  req.body.height
    const weight =  req.body.weight
    const milk =  req.body.milk
    const income =  req.body.income



    db.query("INSERT INTO animalinfo(staffID, color, age, breed, sex, fathersID, mothersID, height, weight, milk, income) VALUES(?,?,?,?,?,?,?,?,?,?,?)", 
    [staffID, color, age, breed, sex, fathersID, mothersID, height, weight, milk, income], 
    (err, result) => {
        console.log(err);
        res.send(200);
        })
})


//Limousin Cattle
app.get("/api/cowI", (req, res) => {
    const sqlSelect = "Select * From animalinfo WHERE breed = 'Limousin Cattle  ' "; 
    db.query(sqlSelect,(err, result) =>{
    res.send(result);
    })
})

//Holstein Friesians infos
app.get("/api/calfI", (req, res) => {
    const sqlSelect = "Select * From animalinfo WHERE breed = 'Holstein Friesians' "; 
    db.query(sqlSelect,(err, result) =>{
    res.send(result);
    })
})


//Brown Swiss infos
app.get("/api/sheepI", (req, res) => {
    const sqlSelect = "Select * From animalinfo WHERE breed = 'Brown Swiss' "; 
    db.query(sqlSelect,(err, result) =>{
    res.send(result);
    })
})

//All cow infos
app.get("/api/allanimalI", (req, res) => {
    const sqlSelect = "Select * From animalinfo"; 
    db.query(sqlSelect,(err, result) =>{
    res.send(result);
    })
})


//Farm of the year
app.get("/api/FOY", (req, res) => {
    const sqlSelect = "SELECT breed FROM animalinfo WHERE milk = (SELECT MAX(milk) FROM animalinfo)";
    db.query(sqlSelect,(err, result) =>{
    res.send(result);
    })
})


//update
app.put("/api/update-cow", (req, res) => {
    const animalID = req.body.animalID;
    const milk = req.body.milk;
    const sqlSelect = "UPDATE animalinfo SET milk = ? WHERE animalID = ?" 
    db.query(sqlSelect,
        [milk, animalID],
        (err, result) =>{
    res.send(result);
    })
})

