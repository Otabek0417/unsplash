import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function SingleImg({ result }) {
  const { addNewImage } = useContext(GlobalContext);
  const [displayed, setDisplayed] = useState(false);
  function downloadImage(link) {
    saveAs(link, "Image.png");
  }
  return (
    <li
      onMouseEnter={() => setDisplayed(true)}
      onMouseLeave={() => setDisplayed(false)}
    >
      {displayed && (
        <Link className="hover" to={`/likedImages/singlepage/${result.id}`}>
          <div className="icons">
            <FcLike className="icon-like" />
            <BsDownload
              className="icon-load"
              onClick={(e) => {
                e.preventDefault();
                downloadImage(result.urls.regular);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                addNewImage(result);
              }}
            >
              Add
            </button>
          </div>
        </Link>
      )}
      <img src={result.urls.regular} alt={result.alt_description} />
    </li>
  );
}

export default SingleImg;
