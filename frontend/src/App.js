import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  addTodo(event) {
    event.preventDefault();
    let title = this.refs.title.value;
    let description = this.refs.description.value;
    let todo = {
      title,
      description
    };
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos: todos
    });
  }

  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
  }
  
  async componentDidMount() {
    try {
      const rest = await fetch('http://127.0.0.1:8000/api/todos/');
      const todos = await rest.json();
      this.setState({
        todos
      });
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className="App">
        <form>
          <input type="text" ref="title" placeholder="title..."/>
          <input type="text" ref="description" placeholder="description..."/>
          <button onClick={this.addTodo}>Add Todo</button>
        </form>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
