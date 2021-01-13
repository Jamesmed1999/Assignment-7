import React from 'react'





 function SearchField(props) {
    function onSubmit(value)
    {
        
        console.log(value)
        
        if(value === 1)
        {
            props.setGiflink(
                'http://api.giphy.com/v1/gifs/trending?api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A'
            )
        }
        else if(value === 2)
        {
            props.setGiflink(
                'http://api.giphy.com/v1/gifs/random?api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A'
            )
        }
        else{
            let value = document.forms["form1"]["forChar"].value
            let search = 'http://api.giphy.com/v1/gifs/search?q=' +value + '&api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A' 
           search = search.replace(/\s+/g, '-')
            console.log("the search link: ", search)
            props.setGiflink(search)
        }
    }

    return (
        <div className ='searchDiv'>
            <img src="search.jpg" alt="Looking for gifs" class="resize"/>
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
export default SearchField