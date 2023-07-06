import { Link } from "react-router-dom";

function AddService(){
    return(
        <div>
            <h1>Service Added</h1>
            <Link to="/services"><button className="btn btn-warning">Back</button></Link>
        </div>
    );
}

export default AddService;