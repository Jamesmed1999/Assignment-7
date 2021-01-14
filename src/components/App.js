
import "../App.css";

import SearchField from "./SearchField";
import GifCard from "./GifCard";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifLink: "",
      gifs: []
    };
    this.setGif = this.setGifs.bind(this);
  }
/*   setGiflink = (value) => {
    this.setState({
      gifLink: value
    });
    console.log(value);
    console.log(this.state.gifLink);
    fetch(this.state.gifLink)
      .then((response) => response.json())
      .then((res) => this.setState({ gifs: res.data }));
    console.log(this.state.gifs);
    fetch(value)
      .then((response) => response.json())
      .then((res) => this.setState({ gifs: res.data }));
  }; */
  setGifs(value2) {
    
      this.setState({
        gifs: []
      });
      this.setState({
        gifs: value2
      });
      
  }
  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=cD5OcHcYruMyAgmdd08Pem21ciNrHk8A"
    )
      .then((response) => response.json())
      .then((res) => this.setState({ gifs: res.data }));
    
  }

  render() {
    let cardArray = [];
    if (this.state.gifs.length >= 1) {
      for (let i = 0; i < this.state.gifs.length; i++) {
        cardArray.push(
          <GifCard data={this.state.gifs[i].images.original.url} />
        );
        //console.log(this.state.gifs[i].images.original.url);
        console.log(this.state.gifs);
      }
     
    }
    else if(this.state.gifs.length === 0)
    {
      
    }
    
    return (
      <div>
        <SearchField  setGifs={this.setGif} />
        <div>{cardArray}</div>
      </div>
    );
  }
}
export default App;