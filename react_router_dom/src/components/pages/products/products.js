import React from 'react'
import {useEffect,useState}from 'react'
import xy from "axios"
import "./Products.css"
import { useNavigate } from 'react-router-dom'

const Products = () => {
   const navigate =useNavigate()
    const[data,setData]= useState([])
    useEffect(()=>{
        xy.get('https://dummyjson.com/recipes').then(res=>{
         console.log(res)
         setData(res.data.recipes)
        }).catch(err=>{
            console.log(err)
    },[])
    })
  return (
    <div className='cardContainer' onClick={()=>navigate(`products/"/${x.id}`)}>
    {data.map(x=>{
        return(
            <div className='card' >
                <img src={x.image}/>
                <p>{x.name}</p>
                <span>{x.rating}</span>
            </div>
        )
      })}
    </div>
  )
}

export default Products
 