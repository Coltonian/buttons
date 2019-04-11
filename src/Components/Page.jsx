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
        
        //bindings
        this.changeTitle = this.changeTitle.bind(this);
        this.inputTitle = this.inputTitle.bind(this);
    }

    changeTitle() {
        this.setState({title:"I've been clicked"});
    }

    inputTitle(title) {
        this.setState({title: title});
    }

    render() {
        return(
            <div>
                <Button 
                    title={this.state.title}
                    changeTitle={this.changeTitle}/>
                <Input inputTitle={this.inputTitle} />
            </div>
        );
    }
}
