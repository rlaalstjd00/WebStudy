import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import './App.css';
import { Container, List, Paper } from '@material-ui/core';
import AddTodo from './AddTodo';
import { call } from './service/ApiService';

function App(){
  
  const [state, setState] = useState({
    items: []
  });
  const items = state.items; 

  useEffect(() => {
    call("/todo", "GET", null)
    .then((response) =>{
      console.log("18",response.data) 
    setState(response.data)});
  }, []);

  const componentDidMount = () => {
    call("/todo", "GET", null).then((response) =>

      setState(response.data)
    );
  
  }

  const add = (item) => {
    call("/todo", "POST", item).then((response) =>
      setState(response.data)
    );
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      setState(response.data)
    );
  };

  const update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      setState(response.data)
    );
  };

  var todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item, idx) => 
          <Todo 
            item={item} 
            key={item.id} 
            deleteItem={deleteItem}
            update={update}
          />
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

// function App() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     call("/todo", "GET", null)
//     .then((response) => setItems(response.data));
//   }, []);

//   const addItem = (item) => {
//     call("/todo", "POST", item)
//     .then((response) => setItems(response.data));
//   };

//   const editItem = (item) => {
//     call("/todo", "PUT", item)
//     .then((response) => setItems(response.data));
//   };

//   const deleteItem = (item) => {
//     call("/todo", "DELETE", item)
//     .then((response) => setItems(response.data));
//   };

//   let todoItems = items.length > 0 && (
//     <Paper style={{ margin: 16 }}>
//       <List>
//         {items.map((item) => (
//           <Todo
//             item={item}
//             key={item.id}
//             editItem={editItem}
//             deleteItem={deleteItem}
//           />
//         ))}
//       </List>
//     </Paper>
//   );
//   return (
//     <div className="App">
//       <Container maxWidth="md">
//         <AddTodo addItem={addItem} />
//         <div className="TodoList">{todoItems}</div>
//       </Container>
//     </div>
//   );
// }

// export default App;
