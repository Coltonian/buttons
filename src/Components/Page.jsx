import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Click Me!"
        };
    }

    handleClick = () => {
        this.setState({
            title: "I was clicked"
        })
    }

    render() {
        return(
            <Button 
                title={this.state.title}
                onClick={() => this.state.handleClick}/>
        );
    }
}
