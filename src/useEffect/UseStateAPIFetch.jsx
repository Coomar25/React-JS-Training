import React, { useState, useEffect } from 'react'
import ProjectHeader from '../projectComponent/projectheader/ProjectHeader'
import { Link, Outlet } from 'react-router-dom';


const UseStateAPIFetch = () => {

    const [state, setState] = useState(10);
    const [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
            const res = await get.json();
            setData(res);
            console.log(res);
        }
        getData();
    }, [state])


    console.log("function body called");

    return (
        <div>
            <ProjectHeader />
            <button className='button-56' onClick={() => setState(state + 1)}>Click {state}</button>
            {
                data && data.map((element, index) => {
                    // suru ko data lekhene vane chaldaina kina vane suru ma setData set hudaina ra last me execute hunxs teo code  vanna le  This code checks if "data" is defined using the short-circuit operator "&&", and only executes the map function if "data" is not undefined. Additionally, the "key" property should be added to the outermost element of the mapped component, which in this case is the div with class "apiData".
                    return (
                        <Link to={`/userdetails/${element.id}`} key={index}>
                            <div className="apiData" key={index}>
                                <h4>{element.firstName}</h4>
                                <h4>{element.lastName}</h4>
                                <h4>{element.email}</h4>
                            </div>
                        </Link>



                    )
                })
            }

        </div >
    )
}

export default UseStateAPIFetch