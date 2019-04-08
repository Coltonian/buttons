import React from 'react';
import ReactDOM from 'react-dom';

export class Button extends React.Component {
    render() {
        return(
            <button 
                onClick={() => this.props.onClick()}>
                {this.props.title}</button>
        );
    }
}