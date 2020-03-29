import React, { Component } from 'react'
import './Todocss.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faCheck, faPen} from '@fortawesome/free-solid-svg-icons';


export default class TodoItem extends Component {    

    render() {

        const {title,handleDelete,handleEdit} = this.props

        return (
            <div className="list">
                <p>                                 
                  
                   
                   <input type="text" value={"- "+title} />
                                          
                    <span>                
                        <FontAwesomeIcon className="faicons" icon={faPen} onClick={handleEdit}/>                                               
                        <FontAwesomeIcon className="faicons" icon={faTrash} onClick={handleDelete}/>
                    </span>
                </p>         
             </div>
        );
    }
}
