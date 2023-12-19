import LogoElectrico from '../assets/LogoElectrico.png';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
const Logo = ({ toggleTaskBar }) => {
  return (
    <View>
      <button onClick={toggleTaskBar}>
        <img src={LogoElectrico} alt='Logo Electrico' className={style.logo} />
      </button>
    </View>
  );
};

export default Logo;
