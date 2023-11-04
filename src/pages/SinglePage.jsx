import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function SinglePage() {
  const { id } = useParams();
  const url = `https://api.unsplash.com/photos/${id}?client_id=${
    import.meta.env.VITE_APP_ACCESS_KEY
  }`;
  const { data: image, isPending, error } = useFetch(url);
  console.log(image && image);
  return (
    <div className="singlePage">
      {image && (
        <>
          <img
            className="image"
            src={image.urls.regular}
            alt={image.alt_description}
            height={500}
          />
          <ul className="list">
            <li className="list__item">
              <h2>Views</h2>
              <p>{image.views.toLocaleString("en-US")}</p>
            </li>
            <li className="list__item">
              <h2>Downloads</h2>
              <p>{image.downloads.toLocaleString("en-US")}</p>
            </li>
            <li className="list__item">
              <h2>Likes</h2>
              <p>{image.likes.toLocaleString("en-US")}</p>
            </li>
            {/* <li className="list__item">
              <h2>Description</h2>
              <p>{image.description ? image.description : "No description "}</p>
            </li> */}
          </ul>
          <div className="profil">
            <div className="profil_wrapper">
              <img
                className="profil-img"
                src={image.user.profile_image.large}
              />
              <p>
                {image.user.first_name} {image.user.last_name}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SinglePage;
