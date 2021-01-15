import React from 'react'

export default function GifCard(props) {
   

   
  
    return (
        <div className = "img-div">
             <img src={props.data} alt="gif"></img>
             
        </div>
    )
}
