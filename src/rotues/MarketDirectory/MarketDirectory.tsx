import { useManageWorkers } from 'hooks/useManageWorkers';
import { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';

export const MarketDirectory = () => {
  const [localWorkers, setLocalWorkers] = useState<number>(() => {
    const saved = localStorage.getItem('marketWorkers')
      ? localStorage.getItem('marketWorkers')
      : localStorage.setItem('marketWorkers', JSON.stringify(0 as number));
    const initialState = saved ? JSON.parse(saved) : (0 as number);
    return initialState;
  });
  const { handleAddWorkes, handleDisbandWorkers } = useManageWorkers(
    setLocalWorkers,
    localWorkers
  );

  useEffect(() => {
    localStorage.setItem('marketWorkers', JSON.stringify(localWorkers));
  }, [localWorkers]);

  const handleAddLocalWorker = (amount: number) => {
    handleAddWorkes(amount);
  };

  return (
    <div>
      <h2>Market</h2>
      <input type="range" min={0} max={10} />
      <div>{localWorkers}</div>
      <button onClick={() => handleAddLocalWorker(1)}>add worker</button>
      <button onClick={() => handleDisbandWorkers(1)}>disband worker</button>
    </div>
  );
};
