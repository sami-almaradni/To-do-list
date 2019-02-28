import React, {Component} from 'react';
import {Todolist} from "./Todolist";

export class ToDoItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div key={this.props.index} className={this.props.lastItem ? 'lastItem' : 'items'}>
                <div className="minusContainer">
                    <p className="minus">-</p>
                </div>
                <div className="contentContainer">
                    <p className="item">{this.props.value}</p>
                </div>
                <div className="dlt">
                    <button type="button" onClick={this.props.deleteHandler} className='dltButton'>delete</button>
                </div>
            </div>
        );
    }
}