import React,{Component} from 'react';
import {SearchBox} from './Component/search-box/search-box';
import { CardList} from './Component/Card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {  
      monsters: [],
      searchField: ''
    };
    
  }
 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters:users }));
  };

  handleChange=(e)=>{
    this.setState({searchField: e.target.value}  )
  }
  
  render() {
    const { monsters,searchField } = this.state;
    const filterMonster = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return ( 
      <div className="App"> 
        <h1>Monster Roledex</h1>
      
        <SearchBox
        placeholder='search monster'
        handleChange={this.handleChange}
        />
        <CardList monsters={filterMonster} />
      </div>
     );
  }
}
 


export default App;
