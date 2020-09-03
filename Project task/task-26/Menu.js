import React from 'react';

export class Menu extends React.Component {
  constructor() {
    super(props);
    this.handleClick = handleClick.bind(this);
  }
  handleClick = (e) => {
    var text = e.target.value;
    chooseVideo(text);

  }
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}