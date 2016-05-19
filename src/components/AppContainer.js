require('../../res/stylesheets/AppContainer.scss');
import React from 'react';
import AppToolBar from './AppToolBar';
import CardsList from './CardsList';
import OpenAction from './OpenAction';
import SlidesTrack from './SlidesTrack';
import Console from './Console';

const data = [
  {
    id: 1,
    thumbnail: { src: 'http://placehold.it/210x158', alt: 'Slide 1' },
    overlyTitle: 'Overly Title#1',
    overlySubtitle: 'Overly Subtitle#1',
    time: {
      added: new Date().toDateString(),
      ran: new Date().toDateString()
    }
  },
  {
    id: 2,
    thumbnail: { src: 'http://placehold.it/210x158', alt: 'Slide 2' },
    overlyTitle: 'Overly Title#2',
    overlySubtitle: 'Overly Subtitle#2',
    time: {
      added: new Date().toDateString(),
      ran: new Date().toDateString()
    }
  },
  {
    id: 3,
    thumbnail: { src: 'http://placehold.it/210x158', alt: 'Slide 3' },
    overlyTitle: 'Overly Title#3',
    overlySubtitle: 'Overly Subtitle#3',
    time: {
      added: new Date().toDateString(),
      ran: new Date().toDateString()
    }
  }
];

const slideThumbnails = Array.apply(null, Array(10)).map(() => {
  return 'http://placehold.it/140x140';
});

const AppContainer = () => {
  return (
    <div className="app-container">
      <AppToolBar />
      <div className="app-content">
        <OpenAction />
        <CardsList cards={data} />
        <div className="pane-content">
          <Console />
          <SlidesTrack thumbnails={slideThumbnails} />
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
