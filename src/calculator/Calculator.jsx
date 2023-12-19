import { useState } from 'react';

const Calculator = () => {
  const [consumption, setConsumption] = useState(0);
  const [rate, setRate] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    const cost = consumption * rate;
    setTotalCost(cost);
  };

  return (
    <div>
      <h2>Calculadora de Energía</h2>
      <div>
        <label>Consumo (kWh): </label>
        <input
          type='number'
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
        />
      </div>
      <div>
        <label>Tarifa ($/kWh): </label>
        <input
          type='number'
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <button onClick={calculateCost}>Calcular Costo</button>
      {totalCost > 0 && (
        <div>
          <h3>Costo Total: ${totalCost}</h3>
        </div>
      )}
    </div>
  );
};

export default Calculator;
