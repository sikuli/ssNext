require('../../res/stylesheets/App.scss');
import React from 'react';
import AppContainer from './AppContainer';
import { deepPurple500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepPurple500,
  },
});

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppContainer />
    </MuiThemeProvider>
  );
};
export default App;
