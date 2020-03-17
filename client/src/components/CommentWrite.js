import React from 'react';
import "./CommentCard.css";

// import { Container, Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const CommentWrite = (props) => {

    return (

        <div className="comment_block">

            <div className="create_new_comment">
                <div className="user_avatar">
                    <img alt="Another user" src="https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/73.jpg" />
                </div><div className="input_comment">
                    <input type="text" placeholder="Join the conversation.." />
                </div>
            </div>
        </div>
    )
};

export default CommentWrite;

