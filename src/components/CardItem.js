import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardItem = (props) => {
  return (
    <Card style={{ width: '23%', float: 'left', margin: '2%' }}>
      <CardHeader
        title={props.title}
      />
      <CardMedia
        overlay={<CardTitle
          title={props.overlyTitle}
          subtitle={props.overlySubtitle}
        />
        }
      >
        <img src={props.thumbnail.src} alt={props.thumbnail.alt} />
      </CardMedia>
      <CardText>
        <div className="date-info">
          <div className="date-label">Added: {props.time.added}</div>
          <div className="date-label">Last Ran: {props.time.ran}</div>
        </div>
        <div className="">
        </div>
      </CardText>
      <CardActions>
        <FlatButton label="Run" />
        <FlatButton label="Stop" />
        <FlatButton label="Delete" />
      </CardActions>
    </Card>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  thumbnail: PropTypes.object.isRequired,
  overlyTitle: PropTypes.string.isRequired,
  overlySubtitle: PropTypes.string.isRequired
};
export default CardItem;
