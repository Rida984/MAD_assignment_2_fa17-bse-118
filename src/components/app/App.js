import React, { useState } from "react";
import "./App.css";
import Header from '../header/Header'
import Item from "../item/Item";

import { IconButton } from '@material-ui/core'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const style = {
  fontSize: '24px',
  color: '#333'
}

const App = () => {

  const [items, setItems] = useState([
    { id: 0, count: 0 },
    { id: 1, count: 3 },
  ])

  const addItem = () => {
    setItems([...items, { id: items.length + 1, count: 0 }])
  }
  const deleteItem = (id) => {
    // console.log([...items.filter(item => item.id !== id)])
    setItems([...items.filter(item => item.id !== id)])
  }
  const incItemCount = (id) => {
    let index = items.findIndex(x => x.id === id);
    let temporaryarray = items.slice();
    temporaryarray[index].count = temporaryarray[index].count + 1;
    console.log(temporaryarray)
    setItems(temporaryarray)
  }
  const decItemCount = (id) => {
    let index = items.findIndex(x => x.id === id);
    let temporaryarray = items.slice();
    if (temporaryarray[index].count > 0)
      temporaryarray[index].count = temporaryarray[index].count - 1;
    console.log(temporaryarray)
    setItems(temporaryarray)
  }

  return (
    <div className="app">
      <div>
        {/* <h1>
          Assignment#2{" "}
          <span style={{ fontWeight: "lighter" }}> made with </span> &#10084;
        </h1> */}
        <h1>
          Assignment#2{" "}
          <span style={{ fontWeight: "lighter" }}> FA17-BSE-118</span>
        </h1>
        <div className="main-box">
          <Header items={items.length} />
          <div className="items__header">
            <IconButton onClick={() => setItems([])}>
              <AutorenewIcon style={style} />
            </IconButton>
            <IconButton onClick={addItem}>
              <CloudUploadIcon style={style} />
            </IconButton>
          </div>
          <div className="items">
            {items.length === 0 ? <h1>No item in the cart!</h1> : items.map(item => <Item key={item.id} item={item} deleteItem={deleteItem} incItemCount={incItemCount} decItemCount={decItemCount} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
