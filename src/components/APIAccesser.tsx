import axios from 'axios';
import {Book} from "./BookPresenter";

// Call API

class APIAccesser {
    private static instance: APIAccesser;
    public static getInstance() {
        if(!APIAccesser.instance) {
            APIAccesser.instance = new APIAccesser();
        }

        return APIAccesser.instance;
    }
    public GetBooks(): Book[] {
        let list: Book[] = [];
        list.push({
            id: 1,
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            category: "adulte",
            cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fahrenheit451HUNcover.jpg/250px-Fahrenheit451HUNcover.jpg"
        });
        list.push({
            id: 2,
            title: "1984",
            author: "George Orwell",
            category: "adulte",
            cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fahrenheit451HUNcover.jpg/250px-Fahrenheit451HUNcover.jpg"
        });
        list.push({
            id: 3,
            title: "Dans l abime du temps",
            author: "H P Lovecraft",
            category: "adolescent",
            cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fahrenheit451HUNcover.jpg/250px-Fahrenheit451HUNcover.jpg"
        });
        list.push({
            id: 4,
            title: "Metro 2035",
            author: "Dmitry Glukhovsky",
            category: "adulte",
            cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fahrenheit451HUNcover.jpg/250px-Fahrenheit451HUNcover.jpg"
        });
        list.push({
            id: 5,
            title: "tchoupi",
            author: "Thierry Courtin",
            category: "enfant",
            cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fahrenheit451HUNcover.jpg/250px-Fahrenheit451HUNcover.jpg"
        });
        list.push({
            id: 6,
            title: "Bob l eponge",
            author: "Patrick Pinney",
            category: "enfant",
            cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fahrenheit451HUNcover.jpg/250px-Fahrenheit451HUNcover.jpg"
        });
        return list;
    }
}


export default APIAccesser;