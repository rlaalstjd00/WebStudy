import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';
import { List, Paper } from '@material-ui/core';

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

  return <div className="App">{todoItems}</div>
}

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       items: [
//         {id:"0", title:"hello1", done:true},
//         {id:"1", title:"hello2", done:false}
//       ]
//     };
//   }

//   render(){
//     var todoItems = this.state.items.length > 0 && (
//       <Paper style={{margin: 16}}>
//         <List>
//           {this.state.items.map((item, idx) => 
//             <Todo item={item} key={item.id}/>
//           )}
//         </List>
//       </Paper>
//     );

//     return <div className="App">{todoItems}</div>
//   }
// }

export default App;
