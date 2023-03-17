const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/' , (req , res)=>{
    const message = 'Hello node !'
    res.json({message})
})

app.listen(port ,() => console.log(`Le serveur démarre sur : http://localhost:${port}`))