import './App.css';
import React, { Component }from 'react';  
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import { cast } from '../Components/cast';      

class App extends Component {
    constructor() {
        super() 
        this.state = {
            cast: cast,
            searchfield: ''  
        }
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const { cast, searchfield } = this.state
        const filteredCast = cast.filter(character =>{
            return character.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (cast.length === 0) {
            return <h1>loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1 className='f1'>Big Lebowski Cast</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList cast={filteredCast}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
        }
    }
}

export default App;