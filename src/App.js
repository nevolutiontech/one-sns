import React from 'react';
 import './App.css';

 import OneSNSForm from './components/OneSNSForm';


const Footer = () => (
  <footer className="footer">
    <p>@N.evolutiontech</p>
  </footer>
);

function App() {
  return (
    <div>
    <h1>Share your content to all social media with one click</h1>
    <OneSNSForm/>
    <Footer/> 
    </div>
  );
}

export default App;
