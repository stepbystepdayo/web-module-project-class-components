import React from "react";





class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            newItem:''
        }
    }
    handleChange= e =>{
        this.setState({
            ...this.state,
            newItem:e.target.value
        })
    
    }
    
    handleSubmit= e =>{
        e.preventDefault();
        this.props.addItem(this.state.newItem);
    
    
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" value={this.state.newItem} onChange={this.handleChange}/>
                <button>Add!</button>
                
                
            </form>
        )

    }
}

export default TodoForm;