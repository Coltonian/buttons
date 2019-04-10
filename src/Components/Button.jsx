import React from 'react';
import ReactDOM from 'react-dom';

export class Button extends React.Component {
    handleClick() {
        this.props.onClick();
    }
    
    render() {
        return(
            <button 
                onClick={this.handleClick}>
                {this.props.title}</button>
        );
    }
}