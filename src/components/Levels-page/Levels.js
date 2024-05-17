import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './Levels.css'
import Welcome from "../Welcome";

function Levels() {

    function chooseClick() {
        console.log('Hello');
    }

    return (
        
        <div className="container-level">
            <Welcome />
        <div className="levels">
            <h1>Choose the level</h1>
                <Button><Link to="/level1">Level 1</Link></Button>
                <Button><Link to="/apptanja" >Level 2</Link></Button>
            </div>
        </div>
    )
}

export default Levels