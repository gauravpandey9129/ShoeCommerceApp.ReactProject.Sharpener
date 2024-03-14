import React from 'react'
import classes from './CartButton.module.css'
export default function CartButton() {
  return (
    <div>
        <button   className={classes.btn} type='button'>Your Cart </button>
    </div>
  )
}
