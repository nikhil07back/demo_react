import {Link} from "react-router-dom";

function About() {
  return (
    <div className="card">
      <h5 className="card-header">About</h5>
      <div className="card-body">
        <h5 className="card-title">Utlimate Todo List</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </div>
    </div>
  );
}

export default About;
