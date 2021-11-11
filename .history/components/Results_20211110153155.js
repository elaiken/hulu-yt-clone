import Thumbnail from './Thumbnail'

function Results({ result }) {
    return (<div> {
        results.map((result) => (<Thumbnail key={
            result.id
        }
            result={result} />))
    } </div>);;
}

export default Results;
