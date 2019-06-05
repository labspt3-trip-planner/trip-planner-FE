import React from 'react';
import Typography from '@material-ui/core/Typography';
import CheckListForm from './CheckListForm';
import Checklist from './Checklist';
import useChecklistState from './useChecklistState';

const Checklists = () => {
    const { lists, addList, deleteList } = useChecklistState([]);

    return (
        <div>
            <Typography component="h3" variant="h4">
                Packing List
            </Typography>

            <CheckListForm 
                saveList={listText => {
                    const trimmedText = listText.trim();

                    if(trimmedText.length > 0) {
                        addList(trimmedText);
                    }
                }}
            />

            <Checklist 
                lists={lists}
                deleteList={deleteList}
            />
        </div>
    );
};

export default Checklists;