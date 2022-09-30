import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

function Todo(props) {
    const [state, setState] = useState({ item: props.item, readOnly: true});
    const deleteItem = props.deleteItem;
    const update = props.update;

    useEffect(() => {
        console.log("ReadOnly? ", state.readOnly)
    });

    const deleteEventHandler = () => {
        deleteItem(props.item);
    }

    const offReadOnlyMode = () => {
        console.log("Event!", state.readOnly);
        setState({readOnly: false});
    }
    
    const enterKeyEventHander = (e) => {
        if(e.key === 'Enter'){
            setState({readOnly: true});
            update(props.item);
        }
    }

    const editEventHander = (e) => {
        const thisItem = props.item;
        thisItem.title = e.target.value;
        setState({item: thisItem});
    }

    const checkboxEventHandler = (e) => {
        const thisItem = props.item;
        thisItem.done = !thisItem.done;
        setState({item: thisItem});
        update(props.item);
    }

    const item = props.item;
    return(
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label" : "naked",
                        readOnly: state.readOnly
                    }} 
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    onClick={offReadOnlyMode}
                    onChange={editEventHander}
                    onKeyPress={enterKeyEventHander}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton 
                    aria-label='Delete Todo'
                    onClick={deleteEventHandler}
                    >
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;

