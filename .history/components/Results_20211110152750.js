import Thumbnail from './Thumbnail'

function Results({ requests }) {
    return (<div> {
        results.map((result) => (<Thumbnail key={
            result.id
        }
            result={result} />))
    } </div>);;
}

export default Results;
