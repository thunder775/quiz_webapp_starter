import React, {useState} from "react";

export default function ResultPage(props) {
    let score = props['history']['location']['state']['score'];
    let responses = props['history']['location']['state']['responses'];

    let getRows = function () {
        console.log(responses);
        let result = [];
        for (let i = 0; i < responses.length; i++) {
            result.push(<QuestionRow question={questionsList[i].text}
                                     correctResponse={questionsList[i].options[questionsList[i].correct_choice]}
                                     userResponse={responses[i]}/>)
        }
        return result;
    };
    return (
        <div className={"result-page"}>
            <p>Total Score : {score}</p>
            <table>{getRows()}</table>
        </div>
    );
}

function QuestionRow(props) {
    let color = props.correctResponse === props.userResponse ? '#58B19F' : '#FD7272';
    let response = props.userResponse === null ? 'Timed Out' : props.userResponse;
    return (
        <tr className={'question-row'}>
            <th className={'question'}><p>{props.question}</p></th>
            <th className={'correct-response'}><p>{props.correctResponse}</p></th>
            <th className={'user-response'} style={{backgroundColor: color}}><p>{response}</p></th>
        </tr>
    );
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
