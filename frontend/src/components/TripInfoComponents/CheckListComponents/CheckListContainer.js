import React from 'react';
import Typography from '@material-ui/core/Typography';
import CheckListForm from './CheckListForm';
import Checklist from './Checklist';
import useChecklistState from './useChecklistState';

const Checklists = () => {
    const { lists, addList, deleteList } = useChecklistState([]);

    return (
        <div className="lists-wrapper">
            <div className="packing-wrapper">
                <Typography component="h4" variant="h5">
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
            <div>
                <Typography component="h4" variant="h5">
                    To Do List
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
        </div>
    );
};

export default Checklists;