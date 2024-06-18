import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import Home from './Home';
import Menu from './Menu';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

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
      <Home toggleMenu={toggleMenu} />
      <Animated.View className='absolute top-10' style={[menuStyle]}>
        <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      </Animated.View>
    </View>
  );
};

export default Main;
