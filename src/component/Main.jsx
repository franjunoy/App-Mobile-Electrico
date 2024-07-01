import React, { useState, useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import Home from './Home';
import Menu from './Menu';
import { useRoute } from '@react-navigation/native';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const { user } = route.params;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, [isOpen]);

  const menuStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-1000, 0]
        })
      }
    ],
    opacity: animation
  };

  return (
    <View className='flex-1'>
      <Home toggleMenu={toggleMenu} user={user} />
      <Animated.View className='absolute top-10' style={[menuStyle]}>
        <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      </Animated.View>
    </View>
  );
};

export default Main;
