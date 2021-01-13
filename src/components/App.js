
import '../App.css';
import SearchField from './SearchField'
import React from 'react'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gifLink: ""
    }
  }


   setGiflink = (value) => 
   {
     this.setState ({
       gifLink: value
     })
     console.log(value)
   }





  render()
  {
  return (
 <div>

   <SearchField 
   setGiflink = {this.setGiflink}
   />
 </div>
  );
  }
}

export default App;
