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

  function handleText(e) {
    const { name, value } = e.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <div className='form'>
        <div className='input'>
          <input
            onChange={handleText}
            type='text'
            placeholder='Top text'
            name='topText'
            id='top-text'
            value={meme.topText}
          />
          <input
            value={meme.bottomText}
            onChange={handleText}
            type='text'
            placeholder='Bottom text'
            name='bottomText'
            id='bottom-text'
          />
        </div>
        <button onClick={handleClick} className='purple btn' type='submit'>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className='meme'>
        <img className='memeImg' src={meme.randomImage} alt='meme' />
        <h2 className='meme__text top'>{meme.topText}</h2>
        <h2 className='meme__text bottom'>{meme.bottomText}</h2>
      </div>
    </>
  );
}
