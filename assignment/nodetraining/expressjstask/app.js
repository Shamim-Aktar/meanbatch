const express=require('express')
const app=express()
const morgan=require('morgan')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
const bodyParser=require('body-parser')
const itemRoutes=require('./api/routes/items')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/items', itemRoutes)
module.exports=app;
