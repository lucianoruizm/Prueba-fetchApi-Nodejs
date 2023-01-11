const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

let transactionDb = []

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors())

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send(JSON.stringify(transactionDb))
})

// http://localhost:3000/transactions
app.post('/transactions', (req, res) => {
    let transaction = req.body
    transactionDb.push(transaction)
    console.log(transactionDb);
})

app.listen(port, () => {
    console.log(`i am working in http://localhost:${port}`);
})