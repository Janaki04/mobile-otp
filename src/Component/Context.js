import React,{createContext,useState} from 'react'


export const  Collection= createContext()

export const Context =(props)=>{
    const [data,setData]=useState(0)
    return(
        <div>
      <Collection.Provider value={{data,setData}}>
       {props.children}
     </Collection.Provider>
        </div>
    )
}
export default Context
