// import React, { useEffect, useState } from 'react';
// import Todo from './Todo';
// import './App.css';
// import { Container, List, Paper } from '@material-ui/core';
// import AddTodo from './AddTodo';
// import { call } from './service/ApiService';

// function App(){
  
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     call("/todo", "GET", null)
//     .then((response) => setItems(response.data));
//   }, []);

//   const componentDidMount = () => {
//     call("/todo", "GET", null).then((response) =>

//       setItems(response.data)
//     );
  
//   }

//   const add = (item) => {
//     call("/todo", "POST", item).then((response) =>
//       setItems(response.data)
//     );
//   };

//   const deleteItem = (item) => {
//     call("/todo", "DELETE", item).then((response) =>
//       setItems(response.data)
//     );
//   };

//   const update = (item) => {
//     call("/todo", "PUT", item).then((response) =>
//       setItems(response.data)
//     );
//   };

//   var todoItems = items.length > 0 && (
//     <Paper style={{margin: 16}}>
//       <List>
//         {items.map((item, idx) => 
//           <Todo 
//             item={item} 
//             key={item.id} 
//             deleteItem={deleteItem}
//             update={update}
//           />
//         )}
//       </List>
//     </Paper>
//   );

//   return (
//     <div className='App'>
//       <Container maxWidth="md">
//         <AddTodo add={add}/>
//         <div className='TodoList'>{todoItems}</div>
//       </Container>
//     </div>
//   )
// }

// export default App;

import "./App.css";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";
import { Container, List, Paper, Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import AddTodo from "./AddTodo";
import { call, signout } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call("/todo", "GET", null).then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );

  // navigationBar ??????
  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">????????? ??????</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" raised onClick={signout}>
              ????????????
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  /* ???????????? ?????? ??? ????????? ??? ?????? */
  let todoListPage = (
    <div>
      {navigationBar} {/* ??????????????? ??? ????????? */}
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );

  /* ???????????? ??? ????????? ??? ?????? */
  let loadingPage = <h1> ?????????.. </h1>;
  let content = loadingPage;

  if (!loading) {
    /* ???????????? ????????? todoListPage??? ??????*/
    content = todoListPage;
  }

  /* ????????? content ????????? */
  return <div className="App">{content}</div>;
}


export default App;