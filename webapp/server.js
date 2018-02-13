const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.resolve(__dirname, 'dist')))

const port = process.env.PORTS || 8000

app.listen(port, function () {
    console.log('Web server running on port:', port)
});