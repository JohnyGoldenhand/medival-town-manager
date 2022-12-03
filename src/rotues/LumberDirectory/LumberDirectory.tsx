import { useManageWorkers } from 'hooks/useManageWorkers';
import { useState } from 'react';

export const LumberDirectory = () => {
  const [localWorkers, setLocalWorkers] = useState<number>(0);
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
