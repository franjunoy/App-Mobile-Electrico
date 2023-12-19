import { useState } from 'react';
import Nav from '../nav/Nav';
import TaskBar from '../taskbar/TaskBar';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isTaskBarVisible, setIsTaskBarVisible] = useState(false);

  const toggleTaskBarVisibility = () => {
    setIsTaskBarVisible(!isTaskBarVisible);
  };

  return (
    <div>
      <Nav toggleTaskBar={toggleTaskBarVisibility} />
      <TaskBar
        isVisible={isTaskBarVisible}
        toggleVisibility={toggleTaskBarVisibility}
      />
      <Link to='/Calculator'>
        <button>Calculadora</button>
      </Link>
    </div>
  );
};

export default Home;
