import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './textStyle.css'
import { useState } from 'react';
import Filed from './Filed';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
// import ProjectHeader from './projectComponent/projectheader/ProjectHeader'
import ProjectHeader from '../projectheader/ProjectHeader';


const Textbox = () => {
    const [username, setUsername] = useState(" ");
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [data, setData] = useState([]);

    const addData = () => {
        setData(
            // or we can insert into variable like VarUsername: username, ...... but we doing this as shown below 
            // username, name, comment => asle chai ekchoti matra store garera rakhxa data. In order to store data we need to use spread operator as shown below
            [...data, { username, name, comment }]
        )
        setUsername("");
        setName("");
        setComment("");
    }

    const removeItem = (index) => {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
    }

    return (
        <div>
            < ProjectHeader />
            <div className='textboxForm'>
                <Box className="txtField">
                    <TextField
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        id="uname"
                        label="Username"
                        variant="outlined" />
                    <TextField
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        id="name"
                        label="Name"
                        variant="filled" />
                    <TextField
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}

                        id="comment"
                        label="comment"
                        variant="standard" />
                    <Button onClick={addData} variant="outlined">Add</Button>
                </Box>



            </div >

            <div className="showData">
                <div className="uname threeColumn">
                    <h2>UserName</h2>
                </div>

                <div className="name threeColumn">
                    <h3>Name</h3>
                </div>

                <div className="cmt threeColumn">
                    <h5>Comment</h5>
                </div>

                <div className="cmt threeColumn">
                    <h5>Delete</h5>
                </div>
            </div>

            {
                data.map((element, index) => {
                    return (
                        // <Filed username={element.username} name={element.name} comment={element.comment} index={index} />

                        <div className="showData">
                            <div className="uname threeColumn">

                                <h3>{element.username}</h3>
                            </div>

                            <div className="name threeColumn">

                                <h4>{element.name}</h4>
                            </div>

                            <div className="cmt threeColumn">

                                <h5>{element.comment}</h5>
                            </div>

                            <div className="deletebtn threeColumn">
                                <Button onClick={() => removeItem(index)} variant="contained" color="error">
                                    <AutoDeleteIcon />
                                </Button>
                            </div>

                        </div>
                    )
                })
            }



        </div>

    )
}

export default Textbox



