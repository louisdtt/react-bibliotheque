import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

 function AddComment() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    placeholder="Add a public comment..."
                />
                <Button variant="contained">
                    Cancel
                </Button>
                <Button variant="contained" color="primary">
                    Comment
                </Button>
            </div>
        </form>
    );
}

export default AddComment;