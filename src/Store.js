import { createContext, useState } from 'react';
export const Store = createContext();
export const ComputerChoice = createContext();
export const userPoints = createContext();
export const computerPoints = createContext();

export function StoreProvider({ children }) {
  const [userCh, setUserCh] = useState('rock');
  const [computerCh, setComputerCh] = useState('rock');
  const [userP, setUserP] = useState(-2);
  const [computerP, setComputerP] = useState(-2);
  const userPValue = { userP, setUserP };
  const computerPValue = { computerP, setComputerP };
  const value = { userCh, setUserCh };
  const valueForOpponent = { computerCh, setComputerCh };
  return (
    <Store.Provider value={value}>
      <ComputerChoice.Provider value={valueForOpponent}>
        <userPoints.Provider value={userPValue}>
          <computerPoints.Provider value={computerPValue}>
            {children}
          </computerPoints.Provider>
        </userPoints.Provider>
      </ComputerChoice.Provider>
    </Store.Provider>
  );
}
