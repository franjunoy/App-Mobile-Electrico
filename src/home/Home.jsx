import { useState } from 'react';
import Nav from '../nav/Nav';
import TaskBar from '../taskbar/TaskBar';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Home = () => {
  const [isTaskBarVisible, setIsTaskBarVisible] = useState(false);

  const toggleTaskBarVisibility = () => {
    setIsTaskBarVisible(!isTaskBarVisible);
  };

  return (
    <View>
      <Nav toggleTaskBar={toggleTaskBarVisibility} />
      <TaskBar
        isVisible={isTaskBarVisible}
        toggleVisibility={toggleTaskBarVisibility}
      />
      <Link to='/Calculator'>
        <Button> title="Calculadora"</Button>
      </Link>
    </View>
  );
};

export default Home;
