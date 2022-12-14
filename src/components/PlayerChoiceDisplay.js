import { useContext } from 'react';
import { ComputerChoice, Store } from '../Store';

export default function PlayerChoiceDisplay() {
  const { userCh } = useContext(Store);
  const { computerCh } = useContext(ComputerChoice);
  return (
    <div className="players-choice">
      <div className="player-one-choice">
        <img src={`./images/${userCh}.png`} alt={userCh} />
      </div>
      <div className="player-two-choice">
        <img src={`./images/${computerCh}.png`} alt={computerCh} />
      </div>
    </div>
  );
}
