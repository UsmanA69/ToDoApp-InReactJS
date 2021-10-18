import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDOlists from './list';

function App() {
  const [inputList,setInputList]= useState("")
  const [Items,setItems] =useState([]);

  const itemEvent= (event)=> {
    setInputList(event.target.value);
  };
  const listOfItems= ()=> {
    setItems((oldItems) =>{ 
      return [...oldItems, inputList] 
    });
    setInputList('');
  };
  const deleteItems=(id)=>{
    console.log('Delted')
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id ;
      })
    })
  };
  const clearall=()=>{
    setItems([])
  }
return(
    <>
    <div className='main_div'>
        <div className="centre_div">
              <h1>ToDO List</h1>
              <br />
              <input className='inp' type='text' placeholder='Add Item' onChange={itemEvent}
              value={inputList}      />
              <button style={{marginRight:5,marginLeft:5}} onClick={listOfItems}> + </button>
              <button className='clearall' onClick={clearall}> clear all </button>
                <ol>   
                  {
                    Items.map((intemval,index ) =>{
                      return <ToDOlists key={index} id={index} text={intemval} onSelect={deleteItems} />
                    })
                  }
                </ol>
        </div>
    </div>
    </>
  );
}

export default App;
