import styles from './TaskBar.module.css';
// eslint-disable-next-line react/prop-types
const TaskBar = ({ isVisible, toggleVisibility }) => {
  return (
    <div className={`${styles.taskbar} ${!isVisible && styles.hidden}`}>
      {isVisible && (
        <>
          <button onClick={toggleVisibility} className={styles.taskbarButton}>
            X
          </button>
          <button className={styles.taskbarButton}>
            <h3>Mi Factura</h3>
          </button>
          <button>
            <h3>Mis Pagos</h3>
          </button>
          <button>
            <h3>ChatBot</h3>
          </button>
          <button>
            <h3>Reclamos</h3>
          </button>
          <button>
            <h3>Preguntas Frecuentes</h3>
          </button>
          <button>
            <h3>Salir</h3>
          </button>
        </>
      )}
    </div>
  );
};

export default TaskBar;
