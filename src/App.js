import React from 'react';
import './App.css';
import { VideoSlider } from './components/VideoSlider';


export const App = () => {

  return (
    <div className="App">
      <div className="slider-container">
        <div className="slider">
          <VideoSlider />
        </div>
      </div>
    </div>
  );
};



