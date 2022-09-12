import React, { useState } from 'react';
import Todo from './Todo'
// import logo from './logo.svg';
import './App.css';

// 함수형 컴포넌트
function App() {
  const [state, setState] = useState({id:"id123", title: "제목 1", done: true});
  
  return(
    <div className="App">
      <Todo item={state}/>
    </div>
  );
}

export default App;
