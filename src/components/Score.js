import { useContext } from 'react';
import { userPoints, computerPoints } from '../Store';

export default function Score() {
  const { userP } = useContext(userPoints);
  const { computerP } = useContext(computerPoints);

  return (
    <div className="score-container">
      <div className="score-counter">
        <span id="first-player-score">{userP}:</span>
        <span id="second-player-score">{computerP}</span>
      </div>
      <div className="player-container">
        <div className="first-player">You</div>
        <div className="second-player">Computer</div>
      </div>
    </div>
  );
}
