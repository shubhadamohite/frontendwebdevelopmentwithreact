import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetailComponent extends Component{

    componentDidMount(){
        console.log("Dish Detail Component did mount invoked!!");
    }
    componentDidUpdate(){
        console.log("Dish Detail Component did update invoked!!");
    }
    renderDish(dish) { /*function to render the cards on the screen */

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments){
        if (comments == null) {
            return (<div></div>)
        }
        const cmt = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp; {/*non breaking space*/}
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))} {/*formatting the date*/}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmt}
                </ul>

            </div>
        )
    }


    render(){
        console.log("Dish Detail Component render invoked!!");

        const dish = this.props.dish
        
        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className='container'>
                {dishItem}
                {dishComment}
            </div>
        )
    }

}

export default DishDetailComponent;