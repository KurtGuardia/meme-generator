import logo from '../imgs/logo.svg';

export default function NavBar() {
  return (
    <nav className='nav purple'>
      <div className='nav__logo'>
        <img src={logo} alt='meme' className='nav__logo--img' />
        <h2 className='nav__logo--title'>Meme Generator</h2>
      </div>
      <p className='nav__text'>React Course - Project 3</p>
    </nav>
  );
}
