import React from "react";
import Question from "../Question";
import Option from "../Option";
import './styles.css';
import ProgressBar from "../ProgressBar";


class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            selectedOption: null,
            questionNum: 0,
            isActive: true,
            timer: 100
        };
        this.intevalId = null;
    }

    handleClick = (id) => {
        if (this.state.selectedOption === null) {
            let temp = this.state.score + (id === questionsList[this.state.questionNum].correct_choice ? 10 : 0);
            this.setState({
                selectedOption: id,
                score: temp,
                isActive: false
            })
        }
        this.stopTimer();
        setTimeout(() => {
            this.setState({

                selectedOption: null,
                isActive: true
            });
            this.removeTimerInterval();
        }, 3000)
    };
    stopTimer = () => {
        clearInterval(this.intevalId);
    };
    removeTimerInterval = () => {
        clearInterval(this.intevalId);
        this.setState({
            questionNum: this.state.questionNum + 1,
            selectedOption: null,
            isActive: true,
            timer: 100
        });
        this.startTimer();
    };
componentDidMount() {
    this.startTimer();
}

    startTimer = () => {
        this.intevalId = setInterval(() => {
            if (this.state.timer < 0) {
                this.removeTimerInterval();
            }
            this.setState({
                timer: this.state.timer - .04
            });
            console.log([this.state]);
        }, 1);

    };

    getOptions() {
        let question = questionsList[this.state.questionNum];
        return question.options.map((option) => {
            return <Option correct={question.options.indexOf(option) === question.correct_choice} text={option}
                           isSelected={this.state.selectedOption === question.options.indexOf(option)}
                           onClick={this.state.isActive ? this.handleClick : () => {
                           }} id={question.options.indexOf(option)}/>
        })
    }

    render() {
        return (
            <div className="header">
                <div className="score">Score: {this.state.score}</div>
                <Question questionText={questionsList[this.state.questionNum].text}/>
                <div className="options-container">
                    {this.getOptions()}
                </div>
                <ProgressBar width={this.state.timer}/>
            </div>
        );
    }
}


let questionsList = [
    {
        'text': "Who is current PM of India?",
        'options': ['Narendra Modi', 'Rahul Gandhi', 'Manmohan Singh', 'Sonia Gandhi'],
        'correct_choice': 0
    },
    {
        'text': "What is capital of Orissa?",
        'options': ['Chandigarh', 'Bhubaneshwar', 'Tripura', 'Nagaland'],
        'correct_choice': 1
    },
    {
        'text': 'In the context to India\'s wild life, the flying fox is a __?',
        'options': ['Bat', 'Vulture', 'Stok', 'Kite'],
        'correct_choice': 0
    },
    {
        'text': 'What percentage of land area should remain covered by forest to maintain Ecological balance?',
        'options': ['10%', '33%', '5%', 'None of these'],
        'correct_choice': 1
    },
    {
        'text': ' The purest form of iron is',
        'options': ['Wrought iron', 'Steel', 'Pig iron', 'Nickel steel'],
        'correct_choice': 0
    },
    {
        'text': 'Layer of atmosphere in which Ozone layer lies is',
        'options': ['Exosphere', 'Mesosphere', 'Troposphere', 'Stratosphere'],
        'correct_choice': 3
    },
];
export default Quiz;

