import Thumbnail from "./Thumbnail";
import { FlipMove } from "react-flip-move";

function Results({ results }) {
    return (<FlipMove className="px-S my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex-wrap justify-center "> {
            results.map((result) => (
                <Thumbnail key={result.id}
                    result={result} />
            ))
        } </FlipMove>
    );
}

export default Results;
