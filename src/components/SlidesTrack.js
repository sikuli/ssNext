require('../../res/stylesheets/SlideTrack.scss');
import React, { PropTypes } from 'react';
import SlideThumbnailsList from './SlideThumbnailsList';
import Paper from 'material-ui/Paper';

const paperStyle = {
  height: 160,
  width: '80%',
  margin: 20,
};

const SlideTrack = (props) => {
  return (
    <div className="slide-track-content">
      <h3>Slide Track:</h3>
      <Paper style={paperStyle} className="slides-track-list">
        <SlideThumbnailsList thumbnails={props.thumbnails} />
      </Paper>
    </div>
  );
};
SlideTrack.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.string)
};

export default SlideTrack;
