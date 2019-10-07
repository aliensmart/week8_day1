import React from 'react';
import userContext from './UserContext'

const user = ()=>{
    return(
    <div>
        <span>
            this is a new HTML
        </span>
        {/* {user constext} */}
        <userContext.Consumer>
            {user=> {
                return (<h1>{user}</h1>)
            }}
        </userContext.Consumer>
    </div>
    )
}


export default user