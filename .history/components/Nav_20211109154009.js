import React from 'react'

function Nav() {
    return (<nav>
        <div> {
            Object.entries(requests).map(([
                key, {
                    title,
                    url
                }
            ]))
        } </div>
    </nav>)
}

export default Nav
