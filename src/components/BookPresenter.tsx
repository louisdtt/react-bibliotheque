import {RouteComponentProps} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

export interface Book {
    id: number;
    title: string;
    category: string;
    author: string;
    cover: string;
}

interface TParams {
    id: string;
}

function BookPresenter({match}: RouteComponentProps<TParams>) {
    const [book, setBook] = useState<Book>();
    const [borrowSuccess, setBorrowSuccess] = useState<string>()
    const [error, setError] = useState<string>()
    const handleBorrowBook = () => {


        fetch(`http://localhost:8080/api/user/1/borrow/${match.params.id}`, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVFaTlSQXQ3bHRzWkZKbmJ0MmpzWSJ9.eyJpc3MiOiJodHRwczovL2Rldi11MnFpZ295MC5ldS5hdXRoMC5jb20vIiwic3ViIjoibnBOdzdLR3VXenp2TFhEZFVyd0d4RHFCeHhtN2c1ZVdAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9iaWJsaW90aGVxdWUtYXBpLyIsImlhdCI6MTYyMTE4MDg0OSwiZXhwIjoxNjIzNzcyODQ5LCJhenAiOiJucE53N0tHdVd6enZMWERkVXJ3R3hEcUJ4eG03ZzVlVyIsInNjb3BlIjoiZW5mYW50IGFkb2xlc2NlbnQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJlbmZhbnQiLCJhZG9sZXNjZW50Il19.QU1UJ8nDPrxXYa6K3_jVlZdYWwTQ46fmdlYLjQXcXAwQr2nyZ22AfF9U75GhL77apjEMXP_D_6tWlZXRKEG60cd4AZrimu8zLpIqvBUgxEF70NeGm4stJ3zfQxP91scBzVVak5Neit9i14Ty6z5z9oWBfONhX8WvcNzFFXbn9HifIB9_BQ9oAsqZ28Ga-RZwxLHo-6S0sEuNCih2fiYOK9LeQmtHDWJ-ESavnHsasaksBnS0QUdcflv8jX_B0pJLGTEN6e1kAqdYYwXlS-TLINOxXBUCqdRpyWIurUkZqYDkJFp5HDRtR3Rpe8tpLnoxnh1suTt_gWTB6-Dnlco6TQ',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if (response.status != 200) {
                throw 'Response code is not 200'
            }
            setBorrowSuccess('Borrowed')
        }).catch(e => {
            setBorrowSuccess('Error')
        });


    }

    useEffect(() => {
        axios.get<Book>(`http://localhost:8080/api/book/${match.params.id}`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVFaTlSQXQ3bHRzWkZKbmJ0MmpzWSJ9.eyJpc3MiOiJodHRwczovL2Rldi11MnFpZ295MC5ldS5hdXRoMC5jb20vIiwic3ViIjoibnBOdzdLR3VXenp2TFhEZFVyd0d4RHFCeHhtN2c1ZVdAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9iaWJsaW90aGVxdWUtYXBpLyIsImlhdCI6MTYyMTE2NzU3NCwiZXhwIjoxNjIzNzU5NTc0LCJhenAiOiJucE53N0tHdVd6enZMWERkVXJ3R3hEcUJ4eG03ZzVlVyIsInNjb3BlIjoiZW5mYW50IGFkb2xlc2NlbnQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJlbmZhbnQiLCJhZG9sZXNjZW50Il19.mpzKsL3uyFDIuG3YhUN0JNG4lpY-hBZOF0b0b8LLjggvw15yJnGS33qGcP19sII8TY_7l_RC7IszWeisI0X4YcNF_LicIWkUTXWE6IByJKomfV8hKPjuxDNrCcyobVTMJ9p40ieXY8H38UsaPTrWwoPjRegUmSTQMXLgLWrqwv56CcIILGbZ2_T6zxEFI5cvc4U4mlF_vbU6MWp5u-cVs8xcvBLVT91QF0sD9fZ-SXSzWTiAtH87PrTmnPtVY-Myhs-lz1xq1BVIW580oIJODYI0brdoUkbFHp0BVF5OnkXj4qviFKDj6K42rAa7TyI13N7SvjNpZ2dk99BXozo7Kw',
                'Content-Type': 'application/json'
            }, timeout: 10000
        }).then(response => {
            setBook(response.data)
        }).catch((ex) => {
            let error = 'error';
            setError(error);
        });
    }, []);
    if (book) {
        return (
            <div>
                <p>{book.title}</p>
                <p>{book.category}</p>
                <p>{book.author}</p>
                <img src={`${book.cover}`}/>
                {error && <p className="error">{error}</p>}
                <Button variant="contained" color="primary" onClick={handleBorrowBook}>
                    Borrow
                </Button>
                <p className="borrow">{borrowSuccess}</p>
            </div>
        );
    } else {
        return <div>Error</div>
    }
}

export default BookPresenter;