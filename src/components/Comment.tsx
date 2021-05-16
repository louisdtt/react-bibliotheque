import {Avatar, Grid} from "@material-ui/core";
import {Book} from "./BookPresenter";
import {Customer} from "./Login";


export interface Comment {
    id: number;
    title: string;
    content: string;
    customer: Customer;
    book: Book;
}

function CommentElement({...comment}: Comment) {
    let name = ""
    if (comment.customer) {
        name = comment.customer.name
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