const express=require('express')
const cors=require('cors')
const app=express()
const pool=require('./db')

//midelware
app.use(cors())
app.use(express.json())

// we work with routes //

// create a todo
app.post('/todos',async(req,res)=>{
    
    try {
        console.log(req.body)
        return res.json(req.body)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error)
    }

})
//gel all todos

//get a todo


//update a todo



//delete a todo




app.listen(5000,()=>{
    console.log('server is running on port 5000')
})