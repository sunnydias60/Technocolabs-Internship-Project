import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <video src={this.state} controls autostart autoPlay muted />
      </div>
    );
  }
}