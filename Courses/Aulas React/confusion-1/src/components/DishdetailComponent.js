import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {


    renderComments(comments) {
        console.log(comments);
        if (comments != null)
            return(
                <ul key={comments.id} className="list-unstyled">

                    {comments.map((comment, index) => {
                        return (
                            <li key={`${comment.comment}_{comment.author}`}>
                                {comment.comment}
                                <br/>-- {comment.author}, <span>&nbsp;</span>
                                 {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle><h4>Comments</h4></CardTitle>
                            {this.renderComments(detail.comments)}
                        </CardBody>
                    </Card>             
        );

            
                
        
    }
}

export default DishDetail;