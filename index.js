const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const contactRouter = require('./router')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/contacts', contactRouter)

app.get('/',(req,res)=> {
 res.json({
     Message: "Hello world"
 })
})

const PORT = process.env.PORT || 8080;
mongoose.connect(`mongodb+srv://hossain:hossain@cluster0.nrkw2.mongodb.net/organicdb?retryWrites=true&w=majority`,{
    useNewUrlParser:true
})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("SERVICE RUNNING ON PORT ", PORT);
    })
})
.catch(e => {
    console.log(e)
})
