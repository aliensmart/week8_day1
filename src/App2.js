import React, { useState } from 'react';
import userContext from './component/UserContext';
import User from './component/User';



function App(){

    const [user, setUser] = useState('');

    

    return(
        <div className="App">
            <input id="user" name="user" type="text"  onChange={event=>{setUser(event.target.value)}}/>
        
            <userContext.Provider value={user}>
                <User/>
            </userContext.Provider>
        </div>
    )
}

export default App