import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';

const Filed = ({ username, name, comment }) => {
    return (
        <div>
            <div className="showData">
                <div className="uname threeColumn">

                    <h3>{username}</h3>
                </div>

                <div className="name threeColumn">

                    <h4>{name}</h4>
                </div>

                <div className="cmt threeColumn">

                    <h5>{comment}</h5>
                </div>

                <div className="deletebtn threeColumn">
                    <Button variant="contained" color="error">
                        <AutoDeleteIcon />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Filed