import LogoElectrico from '../assets/LogoElectrico.png';
import style from './Logo.module.css';

// eslint-disable-next-line react/prop-types
const Logo = ({ toggleTaskBar }) => {
  return (
    <div>
      <button className={style.button} onClick={toggleTaskBar}>
        <img src={LogoElectrico} alt='Logo Electrico' className={style.logo} />
      </button>
    </div>
  );
};

export default Logo;
