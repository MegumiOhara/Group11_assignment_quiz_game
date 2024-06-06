import Button from "../Button/Button";
import './Levels.css'
import Welcome from "../Welcome";
import { Link } from 'react-router-dom';


function Levels() {

    return (
        
        <div className="container-level">
            <Welcome />
        <div className="levels">
            <h1>Choose the level</h1>
                <Button><Link to="/quiz">Level 1</Link></Button>
                <Button><Link to="/apptanja" >Level 2</Link></Button>
            </div>
        </div>
    )
}

export default Levels