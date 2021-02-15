import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Meme from './components/Meme';
import SubmitMeme from './components/SubmitMeme';
import './style/style.css'

const obj=
{
  boxShadow:"5px 5px 15px -3px rgba(0,0,0,0.3)",
  color:"pink"
}

function App()
{
  const [memes, setMemes] = useState([])

  useEffect(async () => {

    const result = await axios(
      'https://xmemeapi1.herokuapp.com/memes/',
    );
    console.log(result);
    const memes_list = result.data.reverse()
    setMemes(memes_list);
  }, []);

  return (
    <div className="App">

        <h1 style={obj} className="title">XMEME APP</h1>


      <div className="components">
        <SubmitMeme />
        <Meme memes={memes} />
      </div>
    </div>
  );
}

export default App;
