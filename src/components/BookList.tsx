import BookCard from "./BookCard";
import {Book} from "./BookPresenter";

interface BookList {
    books: Book[];
}

function BookList(props: BookList) {
    return (
        <div className="wrapper">
            {props.books.map(book => (<BookCard key={book.id}{...book}/>))}
        </div>
    );
}

export default BookList;