import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID d157da64a146c90314bff6959e69ac47438a34dbf56db5073520db421815c851'
            }
        });
        console.log(response.data.results);
    }
    render() {
        return (
            <div
                className="ui container"
                style={{
                marginTop: '10px'
            }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    };

};

export default App;