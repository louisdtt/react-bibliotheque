import BookCard from "./BookCard";
import {Book} from "./BookPresenter";
import {useEffect, useState} from "react";
import axios from "axios";

function BookList() {
    const [books, setBooks] = useState<Book[]>();
    const [error, setError] = useState<string>()
    useEffect(() => {
        axios.get<Book[]>('http://localhost:8080/api/book', {
            headers: {
                'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVFaTlSQXQ3bHRzWkZKbmJ0MmpzWSJ9.eyJpc3MiOiJodHRwczovL2Rldi11MnFpZ295MC5ldS5hdXRoMC5jb20vIiwic3ViIjoieTI5T251dWdreGp2eTluVzhJTHRyOGxxejlrd0g3N3lAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9iaWJsaW90aGVxdWUtYXBpLyIsImlhdCI6MTYyMTE2OTM1NywiZXhwIjoxNjIzNzYxMzU3LCJhenAiOiJ5MjlPbnV1Z2t4anZ5OW5XOElMdHI4bHF6OWt3SDc3eSIsInNjb3BlIjoiZW5mYW50IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsiZW5mYW50Il19.hmn3kTOlDrB_7Zn_spwwHwu0S4kIIilIQ0t3NkUX73wbkPYJVAyGwnCWVQ5DhZaTA24zMTTftqCluZJYaBs_Bed0A53xQwAD3uv0Igd6M68-2yZ9fZo9BUwk5G1BTT4YpEiEgKjgwtTacfEOrPSsJ-EBS6mYkpxylsgNh6bbDwGKoDs7ZB3iRA2aAopB-Bw5EGTwFT8-54aImTMG3Vh48tHoKc2Ef3tIfFEMChYjC9QJCCbjH-3_1SUHQTuBrcQHP4YPN1v7eaRbKHjWa_MqMVIHN7eHwZJzxiZVXwcomx2TzW2aEi_17AjtymIgTNM6I1W4tRWXgCv5jGQv4WVljw',
                'Content-Type': 'application/json'
            }, timeout: 10000
        }).then(response => {
            setBooks(response.data.filter(book => book.category == "enfant"));
        }).catch((ex) => {
            let error = 'error';
            setError(error);
        });
    }, []);
    return (
        <div className="wrapper">
            {books?.map(book => (<BookCard key={book.id}{...book}/>))}
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default BookList;