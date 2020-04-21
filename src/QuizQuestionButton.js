import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    
    handleClick(props){
        console.log(props)
        let {button_text} = this.props
        this.props.clickHandler(button_text);
            
    }

    render() {
        return (
            <div>
                <li>
                    <button onClick={this.handleClick.bind(this)}>
                        {this.props.button_text}
                    </button>
                </li>
            </div>
        );
    }
}

export default QuizQuestionButton;