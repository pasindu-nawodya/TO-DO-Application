import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './Todocss.css';

export default class TodoList extends Component {
    render() {

        const{items,clearList,handleDelete,handleEdit} = this.props

        return (
            
            <div className="AppList">
                <header><br/>
                    <center><h2>Item List</h2></center>
                    <hr width="70%"/>

                    {
                        items.map(item => {
                            return(
                                <TodoItem 
                                    key={item.id} 
                                    title={item.title} 
                                    handleDelete={()=> handleDelete(item.id)}
                                    handleEdit={()=> handleEdit(item.id)}
                                />
                            )
                        })
                    }                   

                    <center><button type="button" id="clear-btn" onClick={clearList}>Clear List</button></center>         
                </header>
            </div>
        )
    }
}
