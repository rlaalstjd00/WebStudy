import React, { useState } from "react";

// class Todo extends React.Component {
//     render() {
//         return(
//             <div className = "Todo">
//                 <input type="checkbox" id="todo0" name="todo0" value="todo0"/>
//                 <label for="todo0">Todo 컴포넌트 만들기</label>
//             </div>
//         );
//     }
// }

function Todo(props) {
    const [state, setState] = useState(props.item);

    return(
        <div className = "Todo">
            <input 
            type="checkbox" 
            id= {state.id}
            name= {state.id} 
            checked= {state.done}
            />
            
            <label id={state.id}>
                {state.title}
            </label>
        </div>
    );
}

export default Todo;