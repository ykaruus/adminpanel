const express = require('express')

const app = express()
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))
const PORT = 3000;


app.get('/close', (req, res) => {
    console.log('Nao funciona, rota criada para teste')
})
app.post('/', (req, res) => {
})

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/admin.html')
})

app.listen(PORT, () => {
    console.log(
        `Servidor iniciado na porta %d`, PORT
    )
})




