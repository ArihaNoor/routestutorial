import { Link } from "react-router-dom";
import "./Services.css";

function Info() {
  return (
    <div>
      <h1>Services Page</h1>
      <div class="alert alert-success">
        <strong>Hello!</strong> This is Services Page!!
      </div>
      <Link to="/services/addservice">
        <button className="btn btn-primary">Add Service</button>
      </Link>
      <br></br>
      <Link to="/services/deleteservice">
        <button className="btn btn-danger">Delete Service</button>
      </Link>
      <br></br>
      <Link to="/services/updateservice">
        <button className="btn btn-success">Update Service</button>
      </Link>
    </div>
  );
}

export default Info;
