import React from 'react';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.clickEvent = this.handleClick;
    }

    handleClick(e) {
        console.log(this);
    }

    render() {
        return (
            <div className="demo">
                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default Demo;
