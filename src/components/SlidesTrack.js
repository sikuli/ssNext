require('../../res/stylesheets/SlideTrack.scss');
import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
  height: 160,
  width: 500,
  margin: 20,
};

const SlideTrack = () => {
  return (
    <div className="slide-track-content">
      <h3>Slide Track:</h3>
      <Paper style={paperStyle} className="slides-track-list">
        <ul>
          <li key="1">
            <a href="#">
              <img src="http://placehold.it/150x150" width="150" height="150" alt="Slide#1" />
            </a>
          </li>
          <li key="2">
            <a href="#">
              <img src="http://placehold.it/150x150" width="150" height="150" alt="Slide#2" />
            </a>
          </li>
          <li key="3">
            <a href="#">
              <img src="http://placehold.it/150x150" width="150" height="150" alt="Slide#3" />
            </a>
          </li>
          <li key="4">
            <a href="#">
              <img src="http://placehold.it/150x150" width="150" height="150" alt="Slide#4" />
            </a>
          </li>
          <li key="5">
            <a href="#">
              <img src="http://placehold.it/150x150" width="150" height="150" alt="Slide#5" />
            </a>
          </li>
          <li key="6">
            <a href="#">
              <img src="http://placehold.it/150x150" width="150" height="150" alt="Slide#6" />
            </a>
          </li>
        </ul>
      </Paper>
    </div>
  );
};
export default SlideTrack;
