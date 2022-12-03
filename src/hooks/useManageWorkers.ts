import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  dispatchWorkers,
  SelectWorkers,
  returnWorkers,
} from 'store/slices/buildings/workersSlice';

export const useManageWorkers = (
  setter: Dispatch<SetStateAction<number>>,
  workers: number
) => {
  const { currentlyAvilable } = useSelector(SelectWorkers);
  const dispatch = useDispatch();

  const handleAddWorkes = (amount: number) => {
    if (currentlyAvilable > 0) {
      setter((prev) => prev + amount);
      dispatch(dispatchWorkers(amount));
    } else alert('no more workers');
  };

  const handleDisbandWorkers = (amount: number) => {
    if (workers > 0) {
      setter((prev) => prev - amount);
      dispatch(returnWorkers(amount));
    } else alert('there are no more workers in this building');
  };

  return { handleAddWorkes, handleDisbandWorkers };
};
