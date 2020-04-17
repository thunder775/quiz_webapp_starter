import React, {useEffect} from "react";

function ProgressBar(props) {
    useEffect(() => {
        console.log(props.width);
    });
    function getColor(){
        if(props.width<33){
            return "#FD7272";
        }else if(props.width<66){
            return "orange";
        }else{
            return "#58B19F";
        }
    }
    return (
        <div className={"progress-bar-parent"}>
            <div className={"progress-bar-child"} style={{width: `${props.width}%`, backgroundColor: getColor()}}></div>
        </div>
    );
}

export default ProgressBar;