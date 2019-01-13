import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    //initialize state with images as an array so we can later utilize array functions
    state = { images: [] }
    //use async/await to allow asynchronous activity
    //this needs to be an arrow function in order to bind to this keyword
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID d157da64a146c90314bff6959e69ac47438a34dbf56db5073520db421815c851'
            }
        });
        //setState to return an array of images
        this.setState ({ images: response.data.results });
    }
    //this will render whenever state is initialized or updated
    render() {
        return (
            <div
                className="ui container"
                style={{
                marginTop: '10px'
            }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    };

};

export default App;