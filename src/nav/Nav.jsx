import ProfilePic from '../profilePic/ProfilePic';
import Logo from '../logo/Logo';
import style from './Nav.module.css';

// eslint-disable-next-line react/prop-types
const Nav = ({ toggleTaskBar }) => {
  return (
    <div className={style.nav}>
      <div>
        <Logo toggleTaskBar={toggleTaskBar} />
      </div>
      <div>
        <ProfilePic toggleTaskBar={toggleTaskBar} />
      </div>
    </div>
  );
};

export default Nav;
