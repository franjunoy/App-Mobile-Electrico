import ProfilePic from '../profilePic/ProfilePic';
import Logo from '../logo/Logo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
const Nav = ({ toggleTaskBar }) => {
  return (
    <View>
      <View>
        <Logo toggleTaskBar={toggleTaskBar} />
      </View>
      <View>
        <ProfilePic toggleTaskBar={toggleTaskBar} />
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Nav;
