import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Home from './Home';
import Menu from './Menu';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View>
      <View>
        <Home toggleMenu={toggleMenu} />
        {isOpen && (
          <View className='absolute top-10 h-full w-56 bg-black'>
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Main;
