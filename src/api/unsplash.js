import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID d157da64a146c90314bff6959e69ac47438a34dbf56db5073520db421815c851'
    }
});