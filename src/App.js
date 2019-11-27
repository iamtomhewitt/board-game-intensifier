import React from 'react';
import easyIntense from './audio/Easy_Intense.mp3'
import mediumIntense from './audio/Medium_Intense.mp3'
import superIntense from './audio/Super_Intense.mp3'
import clock from './audio/tick_tock_loop.mp3'

import './App.css';

class App extends React.Component {

	render () {
		return (
			<div className='App'>
				<ul>
					<li><h3>Easy Intense</h3> <audio ref='easy' src={easyIntense} controls loop/></li>
					<br></br>
					
					<li><h3>Medium Intense</h3> <audio ref='medium' src={mediumIntense} controls loop/></li>
					<br></br>

					<li><h3>Super Intense</h3> <audio ref='super' src={superIntense} controls loop/></li>
					<br></br>

					<li><h3>Clock</h3> <audio ref='clock' src={clock} controls loop/></li>
					<br></br>

					<li><h3>Medium Intense</h3> <audio ref='medium' src={mediumIntense} controls loop/></li>
					<br></br>

					<li><h3>Medium Intense</h3> <audio ref='medium' src={mediumIntense} controls loop/></li>
					<br></br>
				</ul>
			</div>
			
		);
	}
}

export default App;
