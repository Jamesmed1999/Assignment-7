
import './App.css';
import searchField from './searchField';



class App extends React.Component() {
  constructor(){
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
   }





  render()
  {
  return (
 <div>

   <searchField 
   setGiflink = {this.setGiflink}
   />
 </div>
  );
  }
}

export default App;
