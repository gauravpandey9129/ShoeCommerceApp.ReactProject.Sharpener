import React from 'react'
import classes from './Header.module.css'
import CartButton from './CartButton'
export default function Header() {
  return (
    <div> 
       <header className={classes.header}  >
        <h1 className={classes.h1}>React.Shoes!</h1>
        <CartButton/>
       </header>

    </div>
  )
}
