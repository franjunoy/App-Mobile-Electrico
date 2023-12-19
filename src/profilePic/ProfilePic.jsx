import FotoDePerfil from '../assets/FotoDePerfil.png';
import style from './ProfilePic.module.css';

const ProfilePic = () => {
  return (
    <div>
      {
        <button className={style.button}>
          <img
            src={FotoDePerfil}
            alt='Logo Perfil'
            className={style.profilePic}
          />
        </button>
      }
    </div>
  );
};

export default ProfilePic;
