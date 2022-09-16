import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import './App.css';
import { Container, List, Paper } from '@material-ui/core';
import AddTodo from './AddTodo';

function App(){
  
  const [state, setState] = useState({
    items: []
  });
  const items = state.items; 

  useEffect(() => {
    console.log("Update Items : ", state.items);
  });

  const add = (item) => {
    const thisItems = state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    setState({items: thisItems});
    console.log("items : ", state.items);
    }

  const deleteItem = (item) => {
    const thisItems = state.items;
    console.log("Before Update Items : ", state.items);
    const newItems = thisItems.filter(e => e.id !== item.id);
    setState({items: newItems})
  }

  var todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item, idx) => 
          <Todo item={item} key={item.id} deleteItem={deleteItem}/>
        )}
      </List>
    </Paper>
  );

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
