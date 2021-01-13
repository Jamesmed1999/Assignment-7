import React from 'react'





export default function searchField(props) {
    function onSubmit(value)
    {
        if(value === 1)
        {
            this.props.setGiflink(
                'http://api.giphy.com/v1/gifs/trending?api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A'
            )
        }
        else if(value === 2)
        {
            this.props.setGiflink(
                'http://api.giphy.com/v1/gifs/random?api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A'
            )
        }
        else{
            let value = document.forms["form1"]["forChar"].value
            let search = 'http://api.giphy.com/v1/gifs/search?q=' + value + '&api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A'
            this.setState(search)
        }
    }

    return (
        <div>
            <h1 className ='gif-search' >Search gifs </h1>
        <form id = "form1" name = "form">
        <input type = "text" id = "forChar"  ></input>
        </form>
        <button onClick = {() => onSubmit(0)}>Search</button>
        <button onClick = {() => onSubmit(1)} value = '1'>trending Search</button>
        <button onClick = {() => onSubmit(2)} value = "2">Random Search</button>
        </div>
    )
}
