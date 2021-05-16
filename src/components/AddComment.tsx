import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";

interface TParams {
    id: string;
}

export interface PostComment {
    id ?: number;
    title?: string;
    content?: string;
    customer_id?: number;
    book_id?: number;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

function AddComment({match}: RouteComponentProps<TParams>) {
    const classes = useStyles();
    const [comment, setComment] = useState<PostComment>({id: 15, book_id: +match.params.id, customer_id: 1});
    const [error, setError] = useState<string>();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(prevState => ({...prevState, title: event.target.value}));
    }

    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(prevState => ({...prevState, content: event.target.value}));
    }

    const handleAddComment = () => {
        console.log("Comment", comment)
        axios.post<Comment>('http://localhost:8080/api/comment', {
            ...comment,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVFaTlSQXQ3bHRzWkZKbmJ0MmpzWSJ9.eyJpc3MiOiJodHRwczovL2Rldi11MnFpZ295MC5ldS5hdXRoMC5jb20vIiwic3ViIjoieTI5T251dWdreGp2eTluVzhJTHRyOGxxejlrd0g3N3lAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9iaWJsaW90aGVxdWUtYXBpLyIsImlhdCI6MTYyMTE2OTM1NywiZXhwIjoxNjIzNzYxMzU3LCJhenAiOiJ5MjlPbnV1Z2t4anZ5OW5XOElMdHI4bHF6OWt3SDc3eSIsInNjb3BlIjoiZW5mYW50IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsiZW5mYW50Il19.hmn3kTOlDrB_7Zn_spwwHwu0S4kIIilIQ0t3NkUX73wbkPYJVAyGwnCWVQ5DhZaTA24zMTTftqCluZJYaBs_Bed0A53xQwAD3uv0Igd6M68-2yZ9fZo9BUwk5G1BTT4YpEiEgKjgwtTacfEOrPSsJ-EBS6mYkpxylsgNh6bbDwGKoDs7ZB3iRA2aAopB-Bw5EGTwFT8-54aImTMG3Vh48tHoKc2Ef3tIfFEMChYjC9QJCCbjH-3_1SUHQTuBrcQHP4YPN1v7eaRbKHjWa_MqMVIHN7eHwZJzxiZVXwcomx2TzW2aEi_17AjtymIgTNM6I1W4tRWXgCv5jGQv4WVljw',
                'Content-Type': 'application/json'
            }, data: comment, timeout: 10000
        }).then(response => {
            console.log(response.data)
        }).catch((ex) => {
            let error = 'error';
            setError(error);
        });
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField id="title" label="Tile" onChange={handleTitleChange}/>
                <TextField
                    id="content"
                    label="Comment"
                    multiline
                    rows={4}
                    placeholder="Add a public comment..."
                    onChange={handleContentChange}
                />
                <Button variant="contained">
                    Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleAddComment}>
                    Comment
                </Button>
            </div>
        </form>
    );
}

export default AddComment;