import React, { useState } from 'react'
import classes from './Form.module.css'
import { useShoeContext } from '../../context/ShoeContext'

export default function Form() {
 
  const{shoeItems,setShoeItems}=useShoeContext()

  const handleOnClick=()=>{
      setShoeItems([...shoeItems,{
        Name:shoename,
        Description:shoedetails,
        Price:shoeprice,
        id:Date.now(),
        L:L,
        M:M,
        S:S,
      }])
  }

   
    
   const[shoename,setShoeName]=useState('')

   const changeShoeName =(event)=>{
    event.preventDefault();
    setShoeName(event.target.value);
   }


   const[shoedetails,setShoeDetails]=useState('')

   const changeShoeDetails =(event)=>{
    event.preventDefault();
    setShoeDetails(event.target.value);
   }


   const[shoeprice,setShoePrice]=useState(0)

   const changeShoePrice =(event)=>{
    event.preventDefault();
    setShoePrice(event.target.value);
   }



   const[L,setL]=useState(0)

   const changeL =(event)=>{
    event.preventDefault();
    setL(event.target.value);
   }


   const[M,setM]=useState(0)

   const changeM =(event)=>{
    event.preventDefault();
    setM(event.target.value);
   }


   const[S,setS]=useState(0)

   const changeS =(event)=>{
    event.preventDefault();
    setS(event.target.value);
   }

  return (
    <div>
        <form className={classes.form}  >
            
        <label  className={classes.ll}   htmlFor='shoename'>Shoe Name :-</label>
        <input  className={classes.name}   type='text' value={shoename} id='shoename' onChange={changeShoeName}/>

        <label className={classes.lm}   htmlFor='shoedetails'>Shoe Details :-</label>
        <input  className={classes.des} type='text' value={shoedetails} id='shoedetails' onChange={changeShoeDetails}/>


        <label className={classes.ls}  htmlFor='price'>Price :-</label>
        <input  className={classes.price} type='number' value={shoeprice} id='price' onChange={changeShoePrice}/><br/>

        <h5>Quantity Available</h5>
        
        <label className={classes.q} htmlFor='L'>L</label>
        <input  className={classes.l}  type='number' value={L} id='L' onChange={changeL}/>

        <label className={classes.q}  htmlFor='M'>M</label>
        <input  className={classes.m}  type='number' value={M} id='M' onChange={changeM}/>


        <label className={classes.q}  htmlFor='S'>S</label>
        <input   className={classes.s}   type='number' value={S} id='S' onChange={changeS}/><br/>
         
        
       <button  onClick={handleOnClick} className={classes.btn}  type='button' >  Add Product  </button>

        </form>
    </div>
  )
}
