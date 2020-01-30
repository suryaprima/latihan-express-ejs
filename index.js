'use strict'
//import library expressJS
const express = require('express')
const ejs = require('ejs')
//inisialisasi port
const port = process.env.PORT || 3000
//initialisasi expressJS ke konstanta app
const app = express()

app.use('/public', express.static(process.cwd() + '/public'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('pages/index')
})

app.get('/about', function(req, res){
    res.render('pages/about',{about : 'about'})
})

app.listen(port, function(){
    console.log('Server listening on port ' + port)
})