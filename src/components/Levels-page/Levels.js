import Button from "../Button/Button";
import './Levels.css'
import { Link } from 'react-router-dom';

function Levels() {

    function handleCategory() {

    }

    return (
        <div className="container">
        <div className="levels">
            <h1>Choose the level</h1>
                <Button> <Link to="/quiz">Megumi's</Link></Button>
                <Button> <Link to="/apptanja">Clothes</Link></Button>
            </div>
        </div>
    )
}

export default Levels