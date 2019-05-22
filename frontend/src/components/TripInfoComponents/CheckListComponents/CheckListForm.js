import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { reset } from 'ansi-colors';

const ListForm = ({ saveList }) => {
    const { value, rest, onChange } = useInputState('');

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                saveList(value);
                reset();
            }}
        >
            <TextField 
                variant="outlined"
                placeholder="Add another..."
                margin="normal"
                onChange={onChange}
                value={value}
            />
        </form>
    );
};

export default ListForm;