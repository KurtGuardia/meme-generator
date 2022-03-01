export default function Meme() {
  return (
    <form>
      <div className='input'>
        <input type='text' placeholder='Top text' name='top' id='top-text' />
        <input
          type='text'
          placeholder='Bottom text'
          name='bottom'
          id='bottom-text'
        />
      </div>
      <button className='purple btn' type='submit'>
        Get a new meme image 🖼️
      </button>
    </form>
  );
}
