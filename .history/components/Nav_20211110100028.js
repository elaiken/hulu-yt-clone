import request from "../utlis/request"

function Nav() {
    return (<nav>
        <div> {
            Object.entries(request).map(([
                key, {
                    title,
                    url
                }
            ]) => (<h2 key={key}> {title}</h2>))
        } </div>
    </nav>)
}

export default Nav
