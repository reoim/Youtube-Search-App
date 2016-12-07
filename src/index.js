// find library 'react' and assign to variable 'React'
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD0rhp3sn1T29EY5jk0Gv1N_AhhMFH7FjY';

// Create a new component. this component should prodce
// some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'dopa twisted fate'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			 });
			// in ES6, if key and value are same you can use ({ value })
			// this.setState({ videos: videos })
		});
	}


	render() {
		return (
	    <div>
	      <SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
	    </div>
	  );
	}
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
