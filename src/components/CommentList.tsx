import {Comment} from "./Comment";
import CommentElement from "./Comment";
import {Divider} from "@material-ui/core";
import React from "react";



interface CommentList {
    comments: Comment[]
}

function CommentList(props: CommentList) {
    return (
        <div className="">
            {props.comments.map(comment => (
                <React.Fragment>
                    <CommentElement {...comment} />
                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                </React.Fragment>
                ))}
        </div>
    );
}

export default CommentList;