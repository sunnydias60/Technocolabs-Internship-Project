import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button onClick={prop}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}

export {Button};