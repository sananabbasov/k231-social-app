import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PostCreateModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("");
    const createButtonHandler = async () => {

        if (photo !== "" && description !== "") {
            await fetch('http://localhost:4000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: "compar_academy",
                    images: [photo],
                    profilePhoto: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg",
                    description: description
                })
            }).then((res) => res.json())
                .catch((err) => console.log(err))

            alert("Post created successfully!")
            handleClose()
        }
    }

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField onChange={(e) => setPhoto(e.target.value)} fullWidth label="Photo url" id="fullWidth" />
                        <TextField onChange={(e) => setDescription(e.target.value)} className='!my-4' fullWidth label="Description" id="fullWidth" multiline rows={3} />
                        <Button onClick={() => createButtonHandler()}>Craete</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}