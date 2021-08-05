// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo"

const Item = props=>{
    return(
        <div>
            {props.listOftoDo.map(item=>(
                <Todo key={item.id} item={item} toggle={props.toggle}/>
            ))}
        <button onClick={props.clearItem}>
        Clear Purchased
        </button>
        </div>
    )
}

export default Item;