// Below code is for props Folder

import React from 'react'
import Student from './component/props/Student'
import Comp from './component/props/Comp'

const App = (props) => {

    // let login = false;
    // if (login == false) {
    //     return (
    //         <div><h1>You can't access the page</h1></div>
    //     )
    // }
    // let login = true;
    // {
    //     login = false ? <Header name="This line is from Header Coomponet from App through propss" ></Header> : <div></div>

    // }
    // if else inside the JSX
    return (
        <div>
            <Student
                name="kumar"
                age={23}
                newName="Roshan"
                Rage={23}
            ></Student>
        </div>
    )
}

export default App