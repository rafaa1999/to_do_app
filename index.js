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

        const{description}=req.body
        // returning : we use it to get the data 
        const newtodo=await pool.query("INSERT INTO  todo (description) VALUES($1) RETURNING *",[description])
        // we ues row[0] to specify the data that we send
        return res.json(newtodo.rows[0])

    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error)
    }

})
//gel all todos
app.get('/todos',async(req,res)=>{
    try {
        const  alltodos=await pool.query("SELECT * FROM todo")
        //we use row just to see the field of row(field of data) and skip other information about the table in the base
        return res.json(alltodos.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})
//get a todo
app.get('/todos/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
          id
        ]);
        return res.json(todo.rows[0])   
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
})

//update a todo
app.put('/todos/:id',async(req,res)=>{
    try {
        const { id } = req.params
        const{description}=req.body
        const todoup = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
            description,id
        ]);
        return res.json(todoup)   
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
})


//delete a todo 

app.delete('/todos/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const updatetodo = await pool.query("DELETE  FROM todo WHERE todo_id = $1", [
          id
        ]);
        return res.json("todo was deleted")   
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
})


app.listen(5000,()=>{
    console.log('server is running on port 5000')
})