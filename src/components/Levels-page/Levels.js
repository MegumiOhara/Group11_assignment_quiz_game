import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './Levels.css'

function Levels() {

    function chooseClick() {
        console.log('Hello');
    }

    return (
        <div className="container">
        <div className="levels">
            <h1>Choose the level</h1>
                <Button>???</Button>
                <Button onClick={chooseClick}>Clothes</Button>
            </div>
        </div>
    )
}

export default Levels