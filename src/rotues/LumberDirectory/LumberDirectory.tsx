import { useManageWorkers } from 'hooks/useManageWorkers';
import { useState, useEffect } from 'react';

export const LumberDirectory = () => {
  const [localWorkers, setLocalWorkers] = useState<number>(() => {
    const saved = localStorage.getItem('lumberWorkers')
      ? localStorage.getItem('lumberWorkers')
      : localStorage.setItem('lumberWorkers', JSON.stringify(0 as number));
    const initialState = saved ? JSON.parse(saved) : (0 as number);
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('lumberWorkers', JSON.stringify(localWorkers));
  }, [localWorkers]);

  const { handleAddWorkes, handleDisbandWorkers } = useManageWorkers(
    setLocalWorkers,
    localWorkers
  );
  return (
    <div>
      <h2>Lumber</h2>
      <div>{localWorkers}</div>
      <button onClick={() => handleAddWorkes(1)}>add worker</button>
      <button onClick={() => handleDisbandWorkers(1)}>disband worker</button>
    </div>
  );
};
