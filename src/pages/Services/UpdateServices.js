import { Link } from "react-router-dom";

function UpdateService(){
    return(
        <div>
            <h1>Service Updated</h1>
            <Link to="/services"><button className="btn btn-warning">Back</button></Link>
        </div>
    );
}

export default UpdateService;