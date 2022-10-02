const express = requipre('express')
const app = express()

app.use(express.static(path.join(__dirname)))
app.listen(3000, ()=> {console})