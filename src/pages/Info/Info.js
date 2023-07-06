import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  return (
    <div>
      <h1>Info Page</h1>
      <div class="alert alert-success">
        <strong>Hello!</strong> This is Info Page!!
      </div>
      <Link to="/info/addinfo">
        <button className="btn btn-primary">Add Info</button>
      </Link>
      <br></br>
      <Link to="/info/deleteinfo">
        <button className="btn btn-danger">Delete Info</button>
      </Link>
      <br></br>
      <Link to="/info/updateinfo">
        <button className="btn btn-success">Update Info</button>
      </Link>
    </div>
  );
}

export default Info;
