import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (

    <div style={{display:"flex", justifyContent:"left"}}>
    <div onClick={props.toggleComplete}>{props.todo.text}</div>
    <button className ="removeButton" onClick={props.onDelete}>X
    </button>
    </div>
);