import React from 'react'
import './Item.css'

import { IconButton } from '@material-ui/core'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const style = {
    fontSize: '24px',
    color: '#333'
}

const Item = ({ item, deleteItem, decItemCount, incItemCount }) => {

    // const 

    return (
        <div className="item">
            <p style={item.count === 0 ? { background: '#e8fc35', padding: '10px', fontWeight: 'bolder' } : {}}>{item.count === 0 ? 'zero' : item.count}</p>
            <IconButton onClick={() => incItemCount(item.id)}>
                <AddCircleOutlinedIcon style={style} />
            </IconButton>
            <IconButton onClick={() => decItemCount(item.id)}>
                <RemoveCircleIcon style={{ ...style, color: "#0a8383" }} />
            </IconButton>
            <IconButton onClick={() => deleteItem(item.id)}>
                <DeleteIcon style={{ ...style, color: '#d12626' }} />
            </IconButton>
        </div>
    )
}

export default Item
