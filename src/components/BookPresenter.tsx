import APIAccesser from "./APIAccesser";
import {RouteComponentProps} from "react-router-dom";

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

const api = APIAccesser.getInstance();

function BookPresenter({match}: RouteComponentProps<TParams>) {
    const book = api.GetBooks().find(book => book.id == +match.params.id);
    if (book) {
        return (
            <div>
                <p>{book.title}</p>
                <p>{book.category}</p>
                <p>{book.author}</p>
                <img src={`${book.cover}`}/>
            </div>
        );
    } else {
        return <div>Error</div>
    }
}

export default BookPresenter;