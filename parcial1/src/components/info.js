
import Col from "react-bootstrap/Col";
import React from "react";
import { Row } from "react-bootstrap";
import './info.css'

function Info(props) {




    return (
        <article className='request'>
            <div className="request-card"  >
                <Row><Col>
                    <div className="img-container">
                        <img src={props.img} alt="foto_perfil"></img>
                    </div>
                   
                    
                        <div className="info-card">
                            <h1 className="title">{props.name}</h1>
                            <div className="stars-cont">
                                <Col>

                                    {props.Description}

                                </Col>
                                <Col>

                                    Following {props.following}

                                </Col>
                                <Col>

                                    Followers: {props.followers}

                                </Col>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </article>
    );


}


export default Info;