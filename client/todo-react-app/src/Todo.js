import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React, { useState } from 'react';

function Todo(props) {
    const [state, setState] = useState({ item: props.item});
    const item = props.item;
    const deleteItem = props.deleteItem;

    const deleteEventHandler = () => {
        deleteItem(state.item);
    }

    return(
        <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
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