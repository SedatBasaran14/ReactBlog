import React, { useState, useEffect } from "react";
import axios from "axios";
function Populer() {
  const [yazilar, setYazilar] = useState([]);
  function yazilariAl() {
    axios
      .get("http://localhost:3000/api/yazilar.json")
      .then(function (gelenVeriler) {
        setYazilar(gelenVeriler.data);
      });
  }
  useEffect(yazilariAl, []);
  return (
    <div>
      <h5 className="bg-success rounded p-2 text-white">Popüler Yazılar</h5>
      <ul class="list-group">
        {yazilar.map(function (veri, index) {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {veri.baslik}
              <span class="badge badge-primary badge-pill">{index + 1}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Populer;