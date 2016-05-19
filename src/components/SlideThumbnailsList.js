import React, { PropTypes } from 'react';

const SlideThumbnailsList = (props) => {
  const imageList = props.thumbnails.map((url, idx) => {
    return (
      <li key={idx}>
        <a href="#">
          <img
            src={url}
            width="140"
            height="140"
            alt={`Slide#${idx}`}
          />
        </a>
      </li>
    );
  });
  return (
    <ul>{imageList}</ul>
  );
};

SlideThumbnailsList.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.string)
};

export default SlideThumbnailsList;
