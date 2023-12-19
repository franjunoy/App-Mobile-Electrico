import FotoDePerfil from '../assets/FotoDePerfil.png';
import { StyleSheet, Text, View } from 'react-native';

const ProfilePic = () => {
  return (
    <View>
      {
        <button className={style.button}>
          <img
            src={FotoDePerfil}
            alt='Logo Perfil'
            className={style.profilePic}
          />
        </button>
      }
    </View>
  );
};

export default ProfilePic;
