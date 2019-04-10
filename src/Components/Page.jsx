import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { Input } from './Input';

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Click Me!"
        };
    }

    handleClick() {
        this.setState({
            title: "I was clicked"
        })
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return(
            <div>
                <Button 
                    title={this.state.title}
                    onClick={() => this.state.handleClick()}/>
                <Input
                    onChange={() => this.state.changeTitle}
                />
            </div>
        );
    }
}
