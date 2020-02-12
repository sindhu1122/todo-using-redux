import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // componentDidMount() {
  //   console.log('props', this.props);
  // }

  componentDidUpdate(pp, ps) {
    if(pp.list.length !== this.props.list.length) {
      console.log('List got updated', this.props.list)
    }
  }

  render() {
    return (
      <div className="App">
        <input  type="text" 
                className="inputTask"
                placeholder="Add your task" 
                onChange={(event) => this.props.setKeyword(event.target.value)} value={this.props.keyword}></input>
        <button type="submit" 
                className="submitBtn" 
                onClick={() => this.props.setTodoList(this.props.keyword)}>Add Todo</button>
        <ul>
          {
            this.props.list.length ?
              this.props.list.map((todo,index) => {
                return <li className="outputTaskList"
                 style={{textDecoration: this.props.list[index].done ? 'line-through' : 'none', }}>
                  <div contentEditable= {this.props.list[index].edit ? "true" : "false"}
                        style={{width:'300px'}}>{todo.value}</div>
                   <button 
                        className="outputBtns"
                        onClick={()=> this.props.setEditList(index)}>Edit</button> 
                  <button
                          className="outputBtns"
                          onClick={()=> this.props.setDoneList(index)}>Done</button>
                  <button 
                          className="outputBtns"
                          onClick={()=> this.props.setDeleteList(index)}>Delete</button>
                </li>
              }) : null
          }
        </ul>
      </div>
    );
  }
}

export default App;


