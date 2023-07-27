import React, { useState } from  'react';
import './display.css'

const Display = (props) => {
    const { checklist, setChecklist } = props; 

    const handleChecked = (a) => {
        a.isChecked = !a.isChecked;
        let checkBox = [...checklist];
        setChecklist(checkBox);
    }

    // I don't understand why we have to checkBox = [...checklist]. What does this do? Save the modified a.isChecked value in the array?

    const strikethrough = (isChecked) => {
        if (isChecked === true){
            return "strikethrough"
        } else {
            return "notStrikethrough"
        }
    }

    const deleteItem = (props) => {
        setChecklist(
            checklist.filter((a) => {
                return a.id != props;
            })
        )
    }

    // When we iterate through filter and return values where the id doesn't equal the "delete" id, is this just saying that we're setting Checklist to be an array of all values but that one?

    return (
        <div>
            {
                checklist.map((a, idx) => (
                    <div className={strikethrough(a.isChecked)} key={idx}>
                        <p>{a.item}</p>
                        <input type="checkbox" onChange={(e) => handleChecked(a)}/>
                        <button value='Delete' onClick={(e) =>deleteItem(a.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;