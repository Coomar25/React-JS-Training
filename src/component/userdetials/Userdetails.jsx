import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const Userdetails = () => {
    const { userid } = useParams();
    const [data, setData] = useState({});
    const [SearchParams, setSearchParams] = useSearchParams();

    const Set = () => {
        setSearchParams({ name: "Coomar", age: "23" });
    }

    const Reset = () => {
        setSearchParams({});
    }
    console.log(SearchParams.get("name"));
    console.log(SearchParams.get("age"));

    useEffect(() => {
        async function getData() {
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userid}`);
            const res = await get.json();
            setData(res[0]);
            console.log(res[0]);
        }
        getData();
    }, [])

    return (
        <div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Image</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Age</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> <h3>{data.id}</h3> </th>
                        <td><h3>{data.firstName}</h3></td>
                        <td><h3>{data.lastName}</h3></td>
                        <td> <h3> <img src={data.imageUrl} /></h3></td>
                        <td> <h3>{data.email}</h3></td>
                        <td> <h3>{data.contactNumber}</h3></td>
                        <td> <h3>{data.age}</h3></td>
                        <td>  <h3>{data.dob}</h3></td>
                        <td> <h3>{data.salary}</h3></td>
                        <td> <h3>{data.address}</h3></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <button onClick={Reset}>Reset</button>
                        <button className='mt-4' onClick={Set}>Set</button>
                    </tr>
                </tbody>
            </table>














        </div>
    )
}

export default Userdetails