import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Book} from "./BookPresenter";
import { Link } from 'react-router-dom';
import "../index.css";

function BookCard({...book}: Book) {
    return (
        <div className="book">
            <Link to={`/books/${book.id}`}>
            <Card className="test">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="400"
                        image={`${book.cover}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {book.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {book.category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
        <Button variant="contained" color="primary">
            Borrow
        </Button>
        </div>
    );
}

export default BookCard;