const express = require('express')
const app = express()
const playerInfo = require('./playerInfo')
const morgan = require('morgan')
app.use(morgan('dev'))


app.get('/',(req,res,next)=>{
    console.log()
    const player = playerInfo.list()
    res.send(`
    <html>
        <head>
        </head>
    <body>
        <h1>WHICH PLAYER WOULD YOU LIKE TO SEE?</h1>
        <ul>
        ${player.map(p =>`
        <li>
        <a href='/player/${p.id}'>${p.name}</a>
        </li>
        `).join('')}
        </ul>
    </body>
    </html>
    `)
})

app.get('/player/:id', (req,res,next)=>{
    const player = playerInfo.list()
    const id = req.params.id
    const info = playerInfo.find(id)
    if(!info.id){
        console.log('id not found')
        res.status(404).send(`
        <h1>player with id ${req.params.id} not found</h1>
        <a href='/'>home</a>
        `)
    }
    else {
        console.log('id found')
        res.send(`
            <h1>You wanna know about ${info.name}?!</h1>
            <a href='/'>HOME</a>
            <p>${info.description}</p>
        `)
    }

})















const port = process.env.PORT || 3065
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})