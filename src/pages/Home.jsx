import Search from "../components/Search";
import useFetch from "../hooks/useFetch";
import Gelerey from "../components/Gelerey";
import { useState } from "react";

function Home() {
  const API = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_APP_ACCESS_KEY
  }&page=1&per_page=18&query=`;

  const [url, setUrl] = useState(API + "bmw");
  const { data, isPending, error } = useFetch(url);

  const newUrl = (value) => {
    setUrl(API + value);
  };

  return (
    <div>
      <h1 className="title">What are you looking for today ?</h1>
      <Search newUrl={newUrl} />
      {data && <Gelerey data={data} />}
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default Home;
