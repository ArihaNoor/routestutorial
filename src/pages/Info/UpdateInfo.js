import { Link } from "react-router-dom";

function UpdateInfo(){
    return(
        <div>
            <h1>Info Updated</h1>
            <Link to="/info"><button className="btn btn-warning">Back</button></Link>
        </div>
    );
}

export default UpdateInfo;