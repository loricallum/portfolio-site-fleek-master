// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Lori Callum" />

            <div className='header__content'>
                <h1>Hi, I'm Lori 👋</h1>
                <p>React Software Developer</p> <br></br>
                <a href="mailto:lorimcallum@gmail.com" className='button'>Contact Me</a>
            </div>
        </section>
    );
}

export default Header;