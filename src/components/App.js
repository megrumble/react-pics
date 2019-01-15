import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    //initialize state with images as an array so we can later utilize array functions
    state = { images: [] }
    //use async/await to allow asynchronous activity
    //this needs to be an arrow function in order to bind to this keyword
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            },
            
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
                <ImageList images={this.state.images}/>
            </div>
        );
    };

};

export default App;