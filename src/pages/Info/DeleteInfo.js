import { Link } from "react-router-dom";

function DeleteInfo(){
    return(
        <div>
            <h1>Info Deleted</h1>
            <Link to="/info"><button className="btn btn-warning">Back</button></Link>
        </div>
    );
}

export default DeleteInfo;