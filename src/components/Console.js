require('../../res/stylesheets/Console.scss');
import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
  height: 160,
  float: 'left'
};
const Console = () => {
  return (
    <div className="console-content">
      <h3>Logs</h3>
      <Paper style={paperStyle} className="logs-list">
        <ul>
          <li key="1">Executed slide #1</li>
          <li key="2">Executed slide #2</li>
          <li key="3">Executed slide #3</li>
          <li key="4">Executed slide #4</li>
          <li key="5">Executed slide #5</li>
          <li key="6">Executed slide #6</li>
          <li key="7">Executed slide #7</li>
          <li key="8">Executed slide #8</li>
          <li key="9">Executed slide #9</li>
          <li key="10">Executed slide #10</li>
          <li key="11">Executed slide #11</li>
          <li key="12">Executed slide #12</li>
        </ul>
      </Paper>
    </div>
  );
};
export default Console;
