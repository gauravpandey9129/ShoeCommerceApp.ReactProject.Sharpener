import React from 'react'
import { useShoeContext } from '../../context/ShoeContext'
import classes from './List.module.css'
export default function List() {
    const{shoeItems}=useShoeContext();
  return (
    <div  className={classes.list} >
     {shoeItems.map((elements)=>(<li className={classes.li}  key={elements.id} >{elements.Name}, {elements.Description},${elements.Price}
                                   <button className={classes.btn} type='button' > Buy Large .{elements.L} </button>
                                   <button className={classes.btn} type='button' > Buy Medium .{elements.M} </button>
                                   <button className={classes.btn} type='button' > Buy Small .{elements.S} </button>
                                    </li>))}

    </div>
  )
}
