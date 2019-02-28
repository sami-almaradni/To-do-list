import React, {Component} from 'react';
import {ToDoItem} from "./ToDoItem";

export class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: [],
            itemsNum: 0

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = this.state.value;
        const listArray = this.state.items;

        this.setState({
            value: event.target.value,
        })
    }

    dlt(index) {
        const itemsArray = this.state.items;
        itemsArray.splice(index, 1);
        this.setState({
            items: itemsArray,
        });
    }

    handleSubmit(event) {
        const value = this.state.value;
        const itemsArray = this.state.items;

        if (value.length == 0) {
            alert("write bitch")
        } else {
            itemsArray.push(this.state.value);
            this.setState({
                value: '',
                items: itemsArray,
                itemsNum: itemsArray.length
            });
        }
        event.preventDefault();
    }

    renderList(){
        let itemsArray = this.state.items;
        const elementArray = [];

        itemsArray.map((item, index)=>{
            if(index === itemsArray.length - 1){
                elementArray.push(
                    <ToDoItem key={index} value={item} index={index} deleteHandler={this.dlt.bind(this, index)} lastItem={true}/>
                );
            } else {
                elementArray.push(
                    <ToDoItem key={index} value={item} index={index} deleteHandler={this.dlt.bind(this, index)} lastItem={false}/>
                );
            }
        });
        return elementArray;
    }

    render() {
        return (
            <div className='background-container container'>
                <h1 id='h1'>To Do List</h1>
                <form onSubmit={this.handleSubmit} id='form'>
                    <label>
                        Just Do It:
                        <input id='inputField' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter items'/>
                    </label>
                    <input type="submit" value={"Enter"}/>
                    <div>
                        {this.renderList()}
                    </div>
                </form>
            </div>
        );
    }
}
