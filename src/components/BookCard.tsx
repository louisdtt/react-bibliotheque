import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Book} from "./BookPresenter";

function BookCard({...book}: Book) {
    return (
        <div className="book">
            <a href={`/books/${book.id}`}>Livre</a><Card className="test">
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
                    <Button variant="contained" color="primary">
                        Borrow
                    </Button>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default BookCard;