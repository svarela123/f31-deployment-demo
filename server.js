const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/public`))

app.get('/api/cat', (req, res) => {
    res.status(200).send('Macy')
})

app.listen(4000,
   () => console.log(`server running on 4000`)
)

