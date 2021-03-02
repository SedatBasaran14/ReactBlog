import React from "react";
import { Link } from "react-router-dom";
function Yazialani(props) {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <Link to={`/yazi/${props.id}`}>
          <h5 className="card-title">{props.baslik}</h5>
        </Link>
      </div>
      <div className="card-body">
        <p className="card-text">{props.icerik}</p>
      </div>
    </div>
  );
}
export default Yazialani;