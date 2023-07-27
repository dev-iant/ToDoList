import React, { useState } from  'react';
    
const Form = (props) => {
    const { checklist, setChecklist } = props
    const [list, setList] = useState({
        id: Math.random(),
        item: "",
        isChecked: false
    })

    const handleListItem = (e) => {
        setList({...list, [e.target.name]:e.target.value})
    }

    const createListItem = (event) => {
        event.preventDefault();
        console.log("createListItem");
        console.log(list);
        setChecklist([...checklist, list])
        setList({
            id: Math.random(),
            item: '',
            isChecked: false
        })
    }

    return (
        <div>
            <form onSubmit={ createListItem }>
                <input type="text" value={list.item} onChange={handleListItem} name='item' />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default Form;