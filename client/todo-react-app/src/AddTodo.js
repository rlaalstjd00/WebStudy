// import { Button, Grid, Paper, TextField } from '@material-ui/core';
// import React, { useState } from 'react';

// function AddTodo(props){
//     const [state, setState] = useState({item: {title: ""}});
//     const add = props.add;

//     const onInputChange = (e) => {
//         const thisItem = state.item;
//         thisItem.title = e.target.value;
//         setState({item : thisItem});
//         console.log(thisItem);
//     }

//     const onButtonClick = () => {
//         add(state.item);
//         setState({item: {title: ""}});
//     }

//     const enterKeyEventHandler = (e) => {
//         if (e.key === 'Enter'){
//             onButtonClick();
//         }
//     }

//     return(
//         <Paper style={{margin: 16, padding: 16}}>
//             <Grid container>
//                 <Grid xs={11} md={11} item style={{paddingRight: 16}}>
//                     <TextField 
//                         placeholder='Add Todo here' 
//                         fullWidth
//                         onChange={onInputChange}
//                         value={state.item.title}    
//                         onKeyPress={enterKeyEventHandler}
//                     />
//                 </Grid>
//                 <Grid xs={1} md={1} item>
//                     <Button 
//                         fullWidth 
//                         color="secondary" 
//                         variant="outlined"
//                         onClick={onButtonClick}    
//                     >
//                         +
//                     </Button>
//                 </Grid>
//             </Grid>
//         </Paper>
//     )
// }

// export default AddTodo;

import React, { useState } from "react";

import { Button, Grid, TextField } from "@material-ui/core";

const AddTodo = (props) => {
    // 사용자의 입력을 저정할 오브젝트
    const [item, setItem] = useState({ title: ""});
    const addItem = props.addItem;

    // onButtonClick 함수 작성
    const onButtonClick = () => {
        addItem(item); // addItem 함수 사용
        setItem({ title: "" });
    };

    // onInputChange 함수 작성
    const onInputChange = (e) => {
        setItem({title: e.target.value});
        console.log(item);
    };

    // enterKeyEventHandler 함수
    const enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
          onButtonClick();
        }
    };


    // onInputChange 함수 TextField에 연결
    return (
        <Grid container style={{ marginTop: 20 }}>
          <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
            <TextField placeholder="Add Todo here" fullWidth
            onChange={onInputChange} 
            onKeyPress={enterKeyEventHandler}
            value={item.title}/>
          </Grid>
          <Grid xs={1} md={1} item >
            <Button fullWidth style={{ height: '100%' }} color="secondary" variant="outlined"
            onClick={onButtonClick}>
              +
            </Button>
          </Grid>
        </Grid>
    );
}

export default AddTodo;