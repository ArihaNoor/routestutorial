import { Link } from "react-router-dom";

function AddInfo(){
    return(
        <div>
            <h1>Info Added</h1>
            <Link to="/info"><button className="btn btn-warning">Back</button></Link>
        </div>
    );
}

export default AddInfo;