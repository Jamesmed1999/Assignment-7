import React from "react";

function SearchField(props) {
  function onSubmit(event,value) {
    event.preventDefault()
    console.log(value);

    if (value === 1) {
      fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A"
      )
        .then((response) => response.json())
        .then((res) => props.setGifs(res.data));
    } else if (value === 2) {
      fetch(
        "https://api.giphy.com/v1/gifs/random?api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A"
      )
        .then((response) => response.json())
        .then((res) => props.setGifs(res.data));
        
    } else {
    
      let val= document.forms["form1"]["forChar"].value;
      let search =
        "https://api.giphy.com/v1/gifs/search?q=" +
        val +
        "&api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A";
      search = search.replace(/\s+/g, "-");

      fetch(search)
        .then((response) => response.json())
        .then((res) => props.setGifs(res.data));
    }
  }

  return (
    <div className="searchDiv">
      <img src="search.jpg" alt="Looking for gifs" class="resize" />
      <h1 className="gif-search">Search gifs </h1>
      <form id="form1" name="form">
        <input type="text" id="forChar"></input>
      </form>
      <button onClick={(e) => onSubmit(e,0)}>Search</button>
      <button onClick={(e) => onSubmit(e,1)} value="1">
        Trending Search
      </button>
      <button onClick={(e) => onSubmit(e,2)} value="2">
        Random Search
      </button>
    </div>
  );
}
export default SearchField;