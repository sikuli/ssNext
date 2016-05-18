import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { deepPurple500 } from 'material-ui/styles/colors';
const titleStyle = {
  color: '#FFFFFF',
  marginLeft: '20px'
};

const AppToolBar = () => {
  return (
    <Toolbar
      className="myActionBar"
      style={{ backgroundColor: deepPurple500 }}
    >
      <ToolbarGroup>
        <img src="http://placehold.it/64x64" alt="logo" className="logo" />
        <ToolbarTitle text="Sikuli Slides" style={titleStyle} />
      </ToolbarGroup>
    </Toolbar>
  );
};
export default AppToolBar;
