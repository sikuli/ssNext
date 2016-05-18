require('../../res/stylesheets/OpenAction.scss');
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FileCloud from 'material-ui/svg-icons/file/cloud';
import HardwareComputer from 'material-ui/svg-icons/hardware/computer';
import { red900, yellow500, fullWhite } from 'material-ui/styles/colors';

const style = {
  margin: '0px 10px',
  backgroundColor: yellow500
};

class OpenAction extends Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false };
  }
  handleClick() {
    this.setState({
      openMenu: true,
    });
  }
  render() {
    return (
      <div className="open-action">
        <h3>Open From:</h3>
        <RaisedButton
          label="Web"
          style={style}
          backgroundColor={red900}
          labelColor={fullWhite}
          icon={<FileCloud />}
          onClick={this.handleClick.bind(this)}
        />
        <RaisedButton
          label="computer"
          style={style}
          backgroundColor={red900}
          labelColor={fullWhite}
          icon={<HardwareComputer />}
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
export default OpenAction;
