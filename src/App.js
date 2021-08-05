import React from 'react';
import ToDoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const listOftoDo =[
{
  do:"Learn setSate()",
  id:0,
  add:false
},
{
  do:"Style my Todo List",
  id:1,
  add:false
}
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state={
      listOftoDo:listOftoDo
    }
  }

  toggle =(itemId)=>{
    console.log("yes!",itemId)
    const updatedTodoList = this.state.listOftoDo.map(item=>{
      if(item.id===itemId){
        return{...item,add:!item.add}
  
      }else{
        return item;
      }
      
    })
    console.log("updated your todo",updatedTodoList)
    this.setState({
      ...this.state,
      listOftoDo:updatedTodoList
    })
  }

  addItem=(itemName)=>{
    console.log('adding toDo', itemName)
    this.setState({
      ...this.state,
      listOftoDo:[
        ...this.state.listOftoDo,
        {
          do:itemName,
          id: Date.now(),
          add:false
        }
      ]
    })
  }

  clearItem=()=>{
    console.log("clear item!")
    this.setState({
      ...this.state,
      listOftoDo:this.state.listOftoDo.filter(item=>!item.add)
    })
  }
  
  
  render() {
    return (
      <div>
       <div>
        <h2>To do list: MVP</h2>
        <ToDoForm addItem={this.addItem} />
        </div>
        <TodoList listOftoDo={this.state.listOftoDo} toggle={this.toggle} clearItem={this.clearItem}/>
      </div>
    );
  }
}

export default App;
