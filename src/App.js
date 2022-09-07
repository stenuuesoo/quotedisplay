import React, { useState, useEffect } from 'react';
import Button  from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './App.css';

function App() {

  const [quote, setQuote] = useState([]);

  useEffect(() => {
    getQuote()}, []);

    const getQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      console.log(data.content);
      setQuote(data.content);
    }

  return (  
    <div className="App">
      <header className="App-header">
        <div id="spacer"></div>
          <Card variant="outlined" sx={{ maxWidth: 800 }}>
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                {quote}
              </Typography>
            </CardContent>
          </Card>
      </header>
      <Button variant="contained" onClick={getQuote}>New Quote</Button>
    </div>
);}

export default App;