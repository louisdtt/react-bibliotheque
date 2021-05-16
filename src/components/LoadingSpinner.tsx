import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePromiseTracker } from 'react-promise-tracker';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

export default function LoadingSpinner() {
    const classes = useStyles();
    const { promiseInProgress } = usePromiseTracker();
    console.log(promiseInProgress)
    return (
        <div>
            {promiseInProgress &&
            <div className={classes.root} id="spinner">
                <CircularProgress />
            </div>}
        </div>
    );
}
