import SingleImg from "./SingleImg";
function Gelerey({ data: { results } }) {
  return (
    <div className="gelerey">
      <ul>
        {results &&
          results.map((result) => {
            return <SingleImg key={result.id} result={result} />;
          })}
      </ul>
    </div>
  );
}

export default Gelerey;
