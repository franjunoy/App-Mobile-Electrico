import { useState } from 'react';
import Nav from '../nav/Nav';
import TaskBar from '../taskbar/TaskBar';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';

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
        <button>Calculadora</button>
      </Link>
    </View>
  );
};

export default Home;
