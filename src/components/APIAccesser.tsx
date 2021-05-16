import axios from 'axios';
import {Book} from "./BookPresenter";
import {Customer} from "./Login";
import {Comment} from "./Comment";

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

    public GetComments(){
        let list: Comment[] = [];
        list.push({
            id: 1,
            title: 'Époustouflant',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 2,
            title: 'Bof',
            content: 'Un livre plein de phrases, je pase mon tour.',
            customer_id: 4,
            book_id: 1
        });
        list.push({
            id: 3,
            title: 'Bien',
            content: 'Vraiment un bon livre.',
            customer_id: 2,
            book_id: 2
        });
        list.push({
            id: 4,
            title: 'Génial',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 5,
            title: 'Génial',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 6,
            title: 'Bof',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 7,
            title: 'Bof',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 8,
            title: 'Bof',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 9,
            title: 'Bof',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 10,
            title: 'Bof',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 11,
            title: 'Bof',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        list.push({
            id: 12,
            title: 'Bof',
            content: 'Un livre incroyable plein de rebondissements.',
            customer_id: 1,
            book_id: 1
        });
        return list;
    }

    public GetUsers(){
        let list: Customer[] = [];
        list.push({
            id: 1,
            name: 'Pierre',
            age: 10,
            category: "enfant"
        });
        list.push({
            id: 2,
            name: 'Lucas',
            age: 10,
            category: "enfant"
        });
        list.push({
            id: 3,
            name: 'Louis',
            age: 10,
            category: "enfant"
        });
        list.push({
            id: 4,
            name: 'Nicolas',
            age: 10,
            category: "enfant"
        });
        return list;
    }
}


export default APIAccesser;