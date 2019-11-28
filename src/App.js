import React from 'react';
import easyMusic from './audio/music-easy.mp3'
import mediumMusic from './audio/music-medium.mp3'
import hardMusic from './audio/music-hard.mp3'
import harderMusic from './audio/music-expert.mp3'
import clock from './audio/clock-telephone.mp3'
import christTarrent from './audio/chris-tarrent.mp3'
import play from './audio/intro-5.mp3'
import showdown from './audio/showdown-1.mp3'
import selectAnswer from './audio/are-you-sure.mp3'
import correctAnswer from './audio/correct-4.mp3'
import wrongAnswer from './audio/wrong-answer-2.mp3'

import './App.css';

class App extends React.Component {

	render() {
		return (
			<div className='App'>
				<ul>
					<li><h3>Let's Play</h3> <audio src={play} controls /></li>
					<br></br>

					<li><h3>Showdown</h3> <audio src={showdown} controls /></li>
					<br></br>

					<li><h3>Clock</h3> <audio src={clock} controls loop /></li>
					<br></br>

					<li><h3>Select Answer</h3> <audio src={selectAnswer} controls loop /></li>
					<br></br>

					<li><h3>Easy Music</h3> <audio src={easyMusic} controls loop /></li>
					<br></br>

					<li><h3>Medium Music</h3> <audio src={mediumMusic} controls loop /></li>
					<br></br>

					<li><h3>Hard Music</h3> <audio src={hardMusic} controls loop /></li>
					<br></br>

					<li><h3>Intense Music</h3> <audio src={harderMusic} controls loop /></li>
					<br></br>

					<li><h3>Wrong Answer</h3> <audio src={wrongAnswer} controls /></li>
					<br></br>

					<li><h3>Correct Answer</h3> <audio src={correctAnswer} controls /></li>
					<br></br>

					<li><h3>Chris Tarrent</h3> <audio src={christTarrent} controls /></li>
					<br></br>
				</ul>
			</div>

		);
	}
}

export default App;
