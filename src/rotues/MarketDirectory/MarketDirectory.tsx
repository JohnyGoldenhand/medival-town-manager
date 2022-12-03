import { useManageWorkers } from 'hooks/useManageWorkers';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMarket } from 'store/slices/buildings/marketSlice';

export const MarketDirectory = () => {
  const { workers } = useSelector(selectMarket);

  const [localWorkers, setLocalWorkers] = useState<number>(() => {
    if (typeof window !== undefined) {
      const marketWorkersFromLocalStorage =
        localStorage.getItem('marketWorkers');
      const initialState = JSON.parse(marketWorkersFromLocalStorage!);
      return initialState;
    } else return 0;
  });
  const { handleAddWorkes, handleDisbandWorkers } = useManageWorkers(
    setLocalWorkers,
    localWorkers
  );

  useEffect(() => {
    if (localStorage.getItem('marketWorkers') === null) {
      localStorage.setItem('marketWorkers', JSON.stringify(localWorkers));
    }
    const marketWorkers = localStorage.getItem('marketWorkers');
    if (marketWorkers) {
      setLocalWorkers(JSON.parse(marketWorkers));
    } else {
      console.log('no data');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('marketWorkers', JSON.stringify(localWorkers));
  }, [localWorkers]);

  const handleAddLocalWorker = (amount: number) => {
    handleAddWorkes(amount);
  };

  return (
    <div>
      <h2>Market</h2>
      <div>{localWorkers}</div>
      <button onClick={() => handleAddLocalWorker(1)}>add worker</button>
      <button onClick={() => handleDisbandWorkers(1)}>disband worker</button>
      <button onClick={() => localStorage.clear()}>clear store</button>
    </div>
  );
};
