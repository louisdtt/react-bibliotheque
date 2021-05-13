import {Avatar, Grid} from "@material-ui/core";
import APIAccesser from "./APIAccesser";

const api = APIAccesser.getInstance();

export interface Comment {
    id: number;
    title: string;
    content: string;
    customer_id: number;
    book_id: number;
}

function CommentElement({...comment}: Comment) {
    let user = api.GetUsers().find(value => value.id == comment.customer_id);
    let name = ""
    if (user) {
        name = user.name
    }
    console.log(name)
    return (
        <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
                <Avatar alt="Remy Sharp" src={`https://eu.ui-avatars.com/api/?name=${name}`} />
            </Grid>
            <Grid>
                <h4 style={{ margin: 0, textAlign: "left" }}>{comment.title}</h4>
                <p style={{ textAlign: "left" }}>
                    {comment.content}
                </p>
            </Grid>
        </Grid>
    );
}

export default CommentElement;