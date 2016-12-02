// find library 'react' and assign to variable 'React'
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBiGJbLnrXABM3jN15aOrtW7sQTLSREV1';


// Create a new component. this component should prodce
// some HTML
const App = () => {
	return (
    <div>
      <SearchBar />
    </div>
);
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
