const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()

const port = process.env.PORT || 3000

app.get('/' , (req , res)=>{
    const message = 'Hello node !'
    res.json({message})
})


const sequelize = new Sequelize('test' , 'root' , '' ,{
    host : 'localhost',
    dialect : 'mariadb',
    logging : true
})


sequelize.authenticate()
    .then(_=>console.log('Cennection has been established successfully.'))
    .catch(error=>console.log('Unable to connect to the database:' , error))
   

app.listen(port ,() => console.log(`Le serveur démarre sur : http://localhost:${port}`))