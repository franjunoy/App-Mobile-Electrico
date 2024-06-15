import { View } from 'react-native';
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
          <View className='absolute top-16'>
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Main;
