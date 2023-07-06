import { Link } from "react-router-dom";

function DeleteService(){
    return(
        <div>
            <h1>Service Deleted</h1>
            <Link to="/services"><button className="btn btn-warning">Back</button></Link>
        </div>
    );
}

export default DeleteService;