import React from 'react';
import './App.css';
import User from './components/user';
import MaterialUI from './components/Material-UI';
import Typography from '@material-ui/core/Typography';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React & Node js Full Stack</p>
      </header>
      <Typography variant="body1" align="center" gutterBottom>
        User Date From Node js Server run at port 3001
      </Typography>
      <User />
      <h1>Material UI Components</h1>
      <MaterialUI />
    </div>
  );
}

export default App;
