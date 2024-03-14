import{useContext,createContext, useState } from 'react';

export const ShoeContext=createContext();

export const useShoeContext=()=>{
    return useContext(ShoeContext)
}


export const ShoeContextProvider=({children})=>{

    const[shoeItems,setShoeItems]=useState([]);

  return(
     <ShoeContext.Provider value={{shoeItems,setShoeItems }}>
     {children}
     </ShoeContext.Provider>

  )

}