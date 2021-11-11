import Thumbnail from './Thumbnail'

function Results({requests}) {
    return (<div> {
        requests.map(result => (<Thumbnail key={
                results.id
            }
            result={result}/>))
    } </div>)
}

export default Results
