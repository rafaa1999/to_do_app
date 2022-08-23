import React,{Fragment,useState,useEffect} from "react"

import UpdateTodo from "./UpdateTodo"

 const ListTodo=()=>{
    const[todos,setTodos]=useState([])
// delete function that we need to delete a todo item

    const deleteTodo=async(id)=>{
        try {
         const deleteTodo=await fetch(`http://localhost:5000/todos/${id}`,{
            method:"DELETE"
         })
            setTodos(todos.filter(todo=>todo.todo_id !== id ))
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTodos = async() => {
        try {

            const response=await fetch("http://localhost:5000/todos")
            const jsonData=await response.json() 
            setTodos(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(()=>{
        getTodos()
    },[])
    return(

        <Fragment>
            <table className="table mt-5 text-center">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Deltete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* 
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                            </tr>
                        
                            
                        */}
                        {todos.map( todo =>(
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td><UpdateTodo todo={todo}/></td>
                                <td><button className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Deltete</button></td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </Fragment>
    )
 }

 export default  ListTodo