
import React from "react"

const Todo = props=>{
    return (
       
        <div 
        onClick={()=>props.toggle(props.item.id)}
        className={`item${props.item.add? 'add':''}`}>
            <p>{props.item.do}</p>
        </div>
    )
}

export default Todo;