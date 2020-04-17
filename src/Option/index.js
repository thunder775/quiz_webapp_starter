import React, {useState} from "react";
import './styles.css';
import Confetti from 'react-dom-confetti';


export default function Option(props) {
    return (
        <div className={props.isSelected ? (props.correct ? "correct-option" : "wrong-option") : "option"}
             onClick={() => props.onClick(props.id)}>

            <Confetti active={props.isSelected && props.correct}/>
            {props.text}
        </div>
    )
}