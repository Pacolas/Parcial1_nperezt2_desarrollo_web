import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Info from './components/info';
import Register from './components/profile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import App from './App';
import { Col } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
      <Register />
      {/* <Info name="Andres Narvaez"  Description={"Me gusta jugar"} following={124} followers={1234} img = "https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg" />
      
      <App />
      <Routes>
      <Route path="/" element={<Info />} />
      <Route path="/cards" element={<App />} />
      </Routes> */}
      
       </StrictMode>


   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
