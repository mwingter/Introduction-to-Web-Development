import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {


    renderComments(comments) {
        console.log(comments);
        if (comments != null)
            return(
                <ul key={comments.id} className="list-unstyled">

                    {comments.map((anObjectMapped, index) => {
                        return (
                            <li key={`${anObjectMapped.comment}_{anObjectMapped.author}`}>
                                {anObjectMapped.comment}
                                <br/>-- {anObjectMapped.author},
                                    {anObjectMapped.date}
                                <br/><br/>
                            </li>     
                        );
                    })}
                </ul>
            );
           
        else
            return(
                <div></div>
            );
    }

    render() {
        const detail = this.props.dishToDetail;

        return (
                    <Card class="">
                        <CardBody>
                            <CardTitle><h4>Comments</h4></CardTitle>
                            {this.renderComments(detail.comments)}
                        </CardBody>
                    </Card>             
        );

            
                
        
    }
}

export default DishDetail;