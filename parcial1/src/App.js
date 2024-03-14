import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Post from './components/Card';
import './PostContainer.css'; // Importa el archivo CSS para aplicar los estilos

const App = () => {
  const [postData, setPostData] = useState([]);


  useEffect(() => {
    fetch('https://github.com/Pacolas/Parcial1_nperezt2_desarrollo_web/blob/main/ig_photos.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudieron cargar los datos');
        }
        return response.json();
      })
      .then(data => {
        setPostData(data);
 
      })
      
  }, []);

  return (
    <Container className="post-container"> 
      {postData.map((post, index) => (
        <Post
          key={index}
          title={post.name}
          imgUrl={post.imgUrl}
          
        />
      ))}
    </Container>
  );
};

export default App;
