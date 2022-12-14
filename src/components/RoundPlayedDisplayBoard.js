import { useContext, useEffect, useState } from 'react';
import { ComputerChoice, computerPoints, Store, userPoints } from '../Store';

export default function RoundPlayedDisplayBoard() {
  const [teller, setTeller] = useState('');
  const { userCh } = useContext(Store);
  const { computerCh } = useContext(ComputerChoice);
  const { setUserP } = useContext(userPoints);
  const { setComputerP } = useContext(computerPoints);
  useEffect(() => {
    if (userCh === computerCh) {
      setUserP((prev) => prev + 1);
      setComputerP((prev) => prev + 1);
      setTeller("It's a draw");
    }
    if (userCh === 'rock' && computerCh === 'paper') {
      setComputerP((prev) => prev + 1);
      setTeller('You Lose!');
    }
    if (userCh === 'rock' && computerCh === 'scissors') {
      setUserP((prev) => prev + 1);
      setTeller('You Win!');
    }
    if (userCh === 'paper' && computerCh === 'rock') {
      setUserP((prev) => prev + 1);
      setTeller('You Win!');
    }
    if (userCh === 'paper' && computerCh === 'scissors') {
      setComputerP((prev) => prev + 1);
      setTeller('You Lose!');
    }
    if (userCh === 'scissors' && computerCh === 'rock') {
      setComputerP((prev) => prev + 1);
      setTeller('You Lose');
    }
    if (userCh === 'scissors' && computerCh === 'paper') {
      setUserP((prev) => prev + 1);
      setTeller('You Win!');
    }
  }, [computerCh]);
  return (
    <div className="board">
      <div className="board-values">{teller}</div>
    </div>
  );
}
