import Thumbnail from "./Thumbnail";

function Results({ results }) {
    return (<div className="px-S my-10 sm:grid md:grid-cols-2"> {
        results.map((result) => (
            <Thumbnail key={result.id}
                result={result} />
        ))
    } </div>
    );
}

export default Results;
