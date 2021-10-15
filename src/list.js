import React from "react";


const ToDOlists=(props)=>{
    
    return (
    <>
    <div className='todo_style'>
    <button className='dltbtn' onClick={()=>{
        props.onSelect(props.id)
    }}
    >Delete
    </button>
    <li>{props.text}</li>
    </div>
    </>)
}


export default ToDOlists