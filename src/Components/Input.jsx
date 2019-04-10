import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle();
    }

    render() {
        return(
            <input onChange={this.handleChange.bind(this)}></input>
        )
    }
}