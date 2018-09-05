import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

const myInterceptor = axios.interceptors.request.use(request => {
    console.log(request);
    //Edit request config
    return request;
},error  => {
    console.log(error)
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    //Edit request config
    return response;
},error  => {
    console.log(error)
    return Promise.reject(error);
});

axios.interceptors.request.eject(myInterceptor);

//If you may need to remove an interceptor later you can.
// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();