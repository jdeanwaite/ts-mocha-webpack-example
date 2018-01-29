import express = require('express')

const app = express()
app.get('/test', (req, res) => {
  res.json({success: true})
})

app.listen(Number(process.env.PORT) || 3001, 'localhost', () => {
  console.log('Listening on port', Number(process.env.PORT) || 3001)
})

export = app