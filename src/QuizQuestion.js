import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props){
        super(props)
        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(button_text){
        if(button_text === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler()
            this.setState({
                incorrectAnswer:false
            })
        }
        else{
            this.setState({
                incorrectAnswer: true
            })
        }
        
    }

    render() {
        console.log(this.props.quiz_question.answer)
        return (
            <div>
                <main>
                    <section>
                        <p className="questionText">{this.props.quiz_question.instruction_text}</p>
                    </section>
                    <section className='buttons'>
                        <ul>
                            {
                                this.props.quiz_question.answer_options.map((data, index) => {
                                    return <QuizQuestionButton 
                                        clickHandler={this.handleClick.bind(this)}
                                        key={index} 
                                        button_text={data}
                                    />
                                })
                            }
                        </ul>
                    </section>
                    {
                        this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null
                    }
                </main>
            </div>
        );
    }
}

export default QuizQuestion;