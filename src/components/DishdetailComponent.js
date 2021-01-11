import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish(dish) {
        let comments = dish.comments.map(comment => (
            <li key={comment.id} >
                {comment.comment}
                <br /><br />
                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                <br /><br />
            </li>
        )) 

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg object src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle heading>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul style={{"list-style-type":"none"}}>
                            {
                                comments
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            )
    };
    
    const DishDetail = (props) => {
        if(props.dish) {
            console.log(props.dish);
            return RenderDish(props.dish) 
        } else {
            return <div></div>
        }
    }

export default DishDetail;