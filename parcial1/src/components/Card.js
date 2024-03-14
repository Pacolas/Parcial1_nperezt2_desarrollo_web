
import Card from "react-bootstrap/Card";
import  "./Card.css";


function Post(props) {
 
 return (

     <Card >
       <Card.Body >
         <Card.Title>{props.title}</Card.Title>
         <Card.Img src={props.imgUrl} alt={props.title} />
         <Card.Text>{props.description}</Card.Text>
       </Card.Body>
     </Card>


 );
}

export default Post;
