import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
import DishDetailComponent from './DishDetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish){

        this.setState({
            selectedDish: dish /*changing state to selected dish*/
        });

    }

    onRenderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }



    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 col-md-5 m-1">    
                    <Card onClick={ () => this.onDishSelect( dish ) } >

                        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                        <CardImgOverlay>
                            <CardTitle> { dish.name }</CardTitle>
                        </CardImgOverlay>
                    </Card>                
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    { menu } {/*this is to render the overall menu*/}
                </div>
                {/*to open the selected dish details below the menu*/}
                <DishDetailComponent dish={this.state.selectedDish}/> {/*passing props to the component for the selected dish*/}
            </div>
        );
    }
}

export default Menu;