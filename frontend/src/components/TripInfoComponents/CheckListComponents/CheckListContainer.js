import React from 'react';
import Typography from '@material-ui/core/Typography';
import CheckListForm from './CheckListForm';
import Checklist from './Checklist';
import useChecklistState from './useChecklistState';
import './trip-page.css';

const Checklists = () => {
    const { lists, addList, deleteList } = useChecklistState([]);

    return (
        <div className="lists-wrapper">
            <div className="list-wrapper">
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
            <div className="list-wrapper">
                <Typography component="h3" variant="h4">
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