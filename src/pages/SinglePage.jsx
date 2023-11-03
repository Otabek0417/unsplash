import { useParams } from "react-router-dom";
function SinglePage() {
  const { id } = useParams();
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default SinglePage;
