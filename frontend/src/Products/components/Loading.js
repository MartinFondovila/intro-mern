import React from 'react'
import { Loader } from 'react-bulma-components'

// No me queda centrada :(
const Loading = () => {
    return (
        <div className="columns is-centered">
            <Loader style={{
            width: 300,
            height: 300
            }}/>
        </div>
    )
}

export default Loading