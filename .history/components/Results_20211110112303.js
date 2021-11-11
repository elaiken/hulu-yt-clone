import React from 'react'

function Results({requests}) {
    return (<div> {
        requests.map(results => (<Thumbnail key={
                results.id
            }
            results={result}/>))
    } </div>)
}

export default Results
