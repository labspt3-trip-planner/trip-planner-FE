import { useState } from 'react';

export default initialValue => {
    const [lists, setLists] = useState(initialValue);

    return {
        lists,
        addList: listText => {
            setLists([...lists, listText]);
        },
        deleteList: listIndex => {
            const newList = lists.filter((_, index) => index !== listIndex);
            setLists(newList);
        },
    };
};