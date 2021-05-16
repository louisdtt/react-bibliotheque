import {Comment} from "./Comment";
import CommentElement from "./Comment";
import {Divider} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {RouteComponentProps} from "react-router-dom";

interface TParams {
    id: string;
}

function CommentList({match}: RouteComponentProps<TParams>) {
    const [comments, setComments] = useState<Comment[]>();
    const [error, setError] = useState<string>()
    useEffect(() => {
        axios.get<Comment[]>('http://localhost:8080/api/comment', {
            headers: {
                'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVFaTlSQXQ3bHRzWkZKbmJ0MmpzWSJ9.eyJpc3MiOiJodHRwczovL2Rldi11MnFpZ295MC5ldS5hdXRoMC5jb20vIiwic3ViIjoieTI5T251dWdreGp2eTluVzhJTHRyOGxxejlrd0g3N3lAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9iaWJsaW90aGVxdWUtYXBpLyIsImlhdCI6MTYyMTE2OTM1NywiZXhwIjoxNjIzNzYxMzU3LCJhenAiOiJ5MjlPbnV1Z2t4anZ5OW5XOElMdHI4bHF6OWt3SDc3eSIsInNjb3BlIjoiZW5mYW50IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsiZW5mYW50Il19.hmn3kTOlDrB_7Zn_spwwHwu0S4kIIilIQ0t3NkUX73wbkPYJVAyGwnCWVQ5DhZaTA24zMTTftqCluZJYaBs_Bed0A53xQwAD3uv0Igd6M68-2yZ9fZo9BUwk5G1BTT4YpEiEgKjgwtTacfEOrPSsJ-EBS6mYkpxylsgNh6bbDwGKoDs7ZB3iRA2aAopB-Bw5EGTwFT8-54aImTMG3Vh48tHoKc2Ef3tIfFEMChYjC9QJCCbjH-3_1SUHQTuBrcQHP4YPN1v7eaRbKHjWa_MqMVIHN7eHwZJzxiZVXwcomx2TzW2aEi_17AjtymIgTNM6I1W4tRWXgCv5jGQv4WVljw',
                'Content-Type': 'application/json'
            }, timeout: 10000
        }).then(response => {
            console.log(response.data)
            setComments(response.data.filter(comment => comment.book.id == +match.params.id));
        }).catch((ex) => {
            let error = 'error';
            console.log(ex)
            setError(error);
        });
    }, []);
    return (
        <div className="comment-list">
            {comments?.map(comment => (
                <React.Fragment>
                    <CommentElement {...comment} />
                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                </React.Fragment>
                ))}
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default CommentList;