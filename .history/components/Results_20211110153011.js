import Thumbnail from './Thumbnail'

function Results({ result }) {
    return (<div> {
        results.map((results) => (<Thumbnail key={
            result.id
        }
            result={result} />))
    } </div>);;
}

export default Results;
