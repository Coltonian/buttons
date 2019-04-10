import React from 'react';
import ReactDOM from 'react-dom';

export class Button extends React.Component {
    handleClick() {
        this.props.changeTitle();
    }
    
    render() {
        return(
            <button 
                onClick={this.handleClick.bind(this)}>
                {this.props.title}
            </button>
        );
    }
}