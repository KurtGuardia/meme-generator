import { useState } from 'react';
import memesData from '../memesData';

const { memes } = memesData.data;

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages] = useState(memes);

  function handleClick() {
    const n = Math.floor(Math.random() * 100);

    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: allMemeImages[n].url };
    });
  }

  return (
    <>
      <div className='form'>
        <div className='input'>
          <input type='text' placeholder='Top text' name='top' id='top-text' />
          <input
            type='text'
            placeholder='Bottom text'
            name='bottom'
            id='bottom-text'
          />
        </div>
        <button onClick={handleClick} className='purple btn' type='submit'>
          Get a new meme image 🖼️
        </button>
      </div>
      <img className='memeImg' src={meme.randomImage} alt='meme' />
    </>
  );
}
