import express from 'express'

const app = express()
app.use(express.json())
const port = 5051

app.get('/api', (req, res)=>{
    res.send("hi class")
})

app.listen(port, ()=>{
    console.log('running on', port)
})