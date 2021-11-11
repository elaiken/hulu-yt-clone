import Image from "next/image"

function Thumbnail({ result }) {
    const BASE_URL = "http://image.tmdb.org/t/p/original/";

    return (<div>
        {<Image layout="responsive" src={
            `${BASE_URL}${result.backdrop_path}`
        } height={1080} width={1920} />}
    </div>)
}

export default Thumbnail
