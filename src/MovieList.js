import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const MovieList = (props) => {
    return (
        <div className="listMovies">
            {props.movies.map((el) =>
                <div md={4} sm={5}>
                    <Card style={{ width: "300px" }}>
                        <Card.Img variant="top" src={el.Image} />
                        <Card.Body>
                            <Card.Title className="ok"> {el.name} </Card.Title>
                            <Card.Text className="so"> {el.Description} </Card.Text>
                            <Button variant="primary">Fav</Button>

                        </Card.Body>
                        <Card.Footer>
                            <StarRatingComponent value={el.rating} />
                            <Button variant="Link"> <Link to={`/Description/${el.id}`}>Description</Link> </Button>

                    </Card.Footer>

                </Card>
                </div>

            )}

        </div>  

    )
}
export default MovieList;
