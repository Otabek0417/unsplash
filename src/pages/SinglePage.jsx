import { useParams } from "react-router-dom";
function SinglePage() {
  const { id } = useParams();
  const url = `https://api.unsplash.com/search/photos?${id}client_id=${
    import.meta.env.VITE_APP_ACCESS_KEY
  }`;

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default SinglePage;
