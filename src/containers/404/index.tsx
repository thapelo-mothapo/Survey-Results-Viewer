import "./styles.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main">
      <div className="fof">
        <h1>Error 404</h1>
        <Link to={"/"}>
          <p>Go to Dashboard</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
