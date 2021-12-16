import React from 'react';

import christTarrent from './audio/chris-tarrent.mp3'
import clock from './audio/clock-telephone.mp3'
import correctAnswer from './audio/correct-4.mp3'
import easyMusic from './audio/music-easy.mp3'
import hardMusic from './audio/music-hard.mp3'
import harderMusic from './audio/music-expert.mp3'
import mediumMusic from './audio/music-medium.mp3'
import play from './audio/intro-5.mp3'
import selectAnswer from './audio/are-you-sure.mp3'
import showdown from './audio/showdown-1.mp3'
import wrongAnswer from './audio/wrong-answer-2.mp3'

import { version } from '../package.json';

import './App.css';

const App = () => (
  <div className='App'>
    <div>v{version}</div>
    {createSound('Let\'s Play', play, false)}
    {createSound('Showdown', showdown, false)}
    {createSound('Clock', clock, true)}
    {createSound('Select Answer', selectAnswer, false)}
    {createSound('Easy Music', easyMusic, true)}
    {createSound('Medium Music', mediumMusic, true)}
    {createSound('Hard Music', hardMusic, true)}
    {createSound('Intense Music', harderMusic, true)}
    {createSound('Correct Answer', correctAnswer, true)}
    {createSound('Wrong Answer', wrongAnswer, true)}
    {createSound('Chris Tarrent', christTarrent, true)}
  </div>
);

const createSound = (name, src, loop) => (
  <div className='sound'>
    <h3>{name}</h3> <audio src={src} controls loop={loop} />
    <br />
  </div >
)

export default App;
