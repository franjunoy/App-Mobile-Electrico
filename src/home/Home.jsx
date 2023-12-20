import { useState } from 'react';
import Nav from '../nav/Nav';
import TaskBar from '../taskbar/TaskBar';
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
    </View>
  );
};

export default Home;
