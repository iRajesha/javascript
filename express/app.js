const express = require('express')
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose')
const app = express()


mongoose.connect('mongodb://localhost/express', { useNewUrlParser: true }).then(()=>{
    console.log('Connected to MongoDB')
}).catch((rejected) => {
    console.log(rejected)
})
require('./models/idea');
const Idea = mongoose.model('ideas')


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req,resp) => {
    //let title = 'Mr. Anderson'
    resp.render('index',{
        title : 'My title2'})
})
app.get('/about', (req,resp) => {
    resp.render('about')
})

app.listen(5000,()=>{
    console.log('console started')
})
