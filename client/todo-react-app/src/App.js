import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';
import { Container, List, Paper } from '@material-ui/core';
import AddTodo from './AddTodo';

function App(){
  
  const [state, setState] = useState({
    items: [
      {id:"0", title:"hello1", done:true},
      {id:"1", title:"hello2", done:false}
    ]
  });
  const items = state.items;

  var todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item, idx) => 
          <Todo item={item} key={item.id}/>
        )}
      </List>
    </Paper>
  );

  var add = (item) => {
    const thisItems = state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    setState({items: thisItems});
    console.log("items : ", state.items);
    }

  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddTodo add={add}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  )
}

export default App;
