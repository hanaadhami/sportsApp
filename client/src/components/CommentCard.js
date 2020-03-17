import React from 'react';
import "./CommentCard.css";

// import { Container, Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const CommentCard = (props) => {

    return (

        <div className="comment_block">
            

            <div className="new_comment">
                <ul className="user_comment">
                    <div className="user_avatar">
                        <img alt="user" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/73.jpg" />
                    </div><div className="comment_body">
                        <p>Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.</p>
                    </div>
                    <div className="comment_toolbar">
                        <div className="comment_details">
                            <ul>
                                <li><i className="fa fa-clock-o"></i> 13:94</li>
                                <li><i className="fa fa-calendar"></i> 04/01/2015</li>
                                <li><i className="fa fa-pencil"></i> <span className="user">John Smith</span></li>
                            </ul>
                        </div><div className="comment_tools">
                            <ul>
                                <li><i className="fa fa-heart love"><span className="love_amt"> </span></i></li>
                            </ul>
                        </div>
                    </div>
                    </ul> 
            </div>
            </div>
    )
};

export default CommentCard;