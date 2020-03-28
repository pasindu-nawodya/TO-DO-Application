import React, { Component } from 'react';
import './Todocss.css';

export default class TodoInput extends Component {    

    render() {

        const{item,handleChange,handleSubmit,editItem} = this.props

        return (
            <div className="App">
                <header>

                    <form id="form-todo" onSubmit={handleSubmit}>
                        <br></br>
                        <center><h2>TODO APP</h2>
                        <input type="text" placeholder="Add work for list" 
                         value={item} onChange={handleChange}/>


                        <button type="submit" id={editItem?"form-todo-btn-true" : "form-todo-btn"}>{editItem? "Edit" : "Add"}</button></center>


                    </form>
                
                </header>
            </div>
        )
    }
}
