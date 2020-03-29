import React , {Component} from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import {v1 as uuid} from 'uuid';

class App extends Component{

  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false,    
    completeItem:false
  };

  handleChange = (e)=>{
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item
    }

    const updatedItems = [...this.state.items,newItem];
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })

  };

  clearList = ()=>{
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items:filteredItems
    })
  }

  handleEdit = id =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItems = this.state.items.find(item => item.id === id);

    this.setState({
      items:filteredItems,
      item : selectedItems.title,
      editItem:true,
      id:id
    })
  }

  render(){
    return(
            
      <div class="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
      <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
      <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} /> 
      </div>

    );
  }
}

export default App;
