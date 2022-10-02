const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname)))
app.listen(3000, ()=> {console.log('Servidor rodando na porta 3000')})