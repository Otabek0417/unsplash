import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FcLike } from "react-icons/Fc";
function Gelerey({ data: { results } }) {
  const [displayed, setDisplayed] = useState(false);
  return (
    <div className="gelerey">
      <ul>
        {results &&
          results.map((result) => {
            console.log(result);
            return (
              <li
                onMouseEnter={() => setDisplayed(true)}
                onMouseLeave={() => setDisplayed(false)}
                key={result.id}
              >
                {displayed && (
                  <div className="hover">
                    <div className="icons">
                      <FcLike className="icon-like" />
                      <BsDownload className="icon-load" />
                    </div>
                  </div>
                )}
                <img src={result.urls.regular} alt={result.alt_description} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Gelerey;
