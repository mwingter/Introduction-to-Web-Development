import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

 

    renderComments(comments) {
        console.log(comments);
        if (comments != null)
                return(
                    <ul className="list-unstyled">
                        {comments.map((index) => {
                            return <li key={index.id}> {index.comment} </li>
                        })}
                    </ul>
                )
           
        else
            return(
                <div></div>
            );
    }

    render() {
        const detail = this.props.dishToDetail;
       // console.log(detail.comments);

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardBody>
                            <CardTitle><h4>Comments</h4></CardTitle>
                            <CardText> 
                                {detail.comments.map((index) => {
                                    return this.renderComments(detail.comments)
                                })}
                                </CardText>
                        </CardBody>
                    </Card>             
                </div>
              </div>
        );

            
                
        
    }
}

export default DishDetail;